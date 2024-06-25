from flask import Blueprint, request, jsonify
import csv
import os
import json
from config import (
    ONE_COST_MAIN_STAT_MAP,
    THREE_COST_MAIN_STAT_MAP,
    FOUR_COST_MAIN_STAT_MAP,
    ONE_COST_MAIN_STAT_VALUE,
    THREE_COST_MAIN_STAT_VALUE,
    FOUR_COST_MAIN_STAT_VALUE,
    SUB_STAT_MAP,
    SUB_STAT_RANGES,
)

echos_bp = Blueprint("echos", __name__)

directory = "db"
if not os.path.exists(directory):
    os.makedirs(directory)

echos_csv_path = os.path.join(directory, "echos.csv")


@echos_bp.route("/ping", methods=["GET"])
def ping():
    return jsonify({"response": "pong"})


@echos_bp.route("/read", methods=["GET"])
def read():
    user_id = request.args.get("user_id")
    if user_id is None:
        return jsonify({"error": "user_id is required"}), 400

    echos = []
    with open(echos_csv_path, mode="r") as f:
        reader = csv.DictReader(f)
        for row in reader:
            if int(row["user_id"]) == int(user_id):
                echo = {
                    "echo_id": row["echo_id"],
                    "cost": row["cost"],
                    "main_stat": json.loads(row["main_stat"]),
                    "sub_stats": json.loads(row["sub_stats"]),
                }
                echos.append(echo)

    return jsonify({"echos": echos})


@echos_bp.route("/write", methods=["POST"])
def write():
    data = request.get_json()
    user_id = int(data.get("user_id"))
    main_stat_index = str(data.get("main_stat"))
    sub_stats = data.get("sub_stats")
    cost = int(data.get("cost"))

    if len(sub_stats) > 5:
        return jsonify({"error": "Each echo can have up to 5 sub stats"}), 400
    elif len(sub_stats) <= 0:
        return jsonify({"error": "Each echo must have at least 1 sub stat"}), 400

    sub_stats = {int(k): float(v) for k, v in sub_stats.items()}

    if cost == 1:
        if main_stat_index not in ONE_COST_MAIN_STAT_MAP:
            return jsonify({"error": "Invalid main stat index"}), 400
        main_stat_value = ONE_COST_MAIN_STAT_VALUE[main_stat_index]
    elif cost == 3:
        if main_stat_index not in THREE_COST_MAIN_STAT_MAP:
            return jsonify({"error": "Invalid main stat index"}), 400
        main_stat_value = THREE_COST_MAIN_STAT_VALUE[main_stat_index]
    elif cost == 4:
        if main_stat_index not in FOUR_COST_MAIN_STAT_MAP:
            return jsonify({"error": "Invalid main stat index"}), 400
        main_stat_value = FOUR_COST_MAIN_STAT_VALUE[main_stat_index]
    else:
        return jsonify({"error": "Invalid cost"}), 400

    for sub_stat, value in sub_stats.items():
        sub_stat = str(sub_stat)
        if sub_stat not in SUB_STAT_MAP:
            return jsonify({"error": f"Invalid sub stat index {sub_stat}"}), 400
        if not SUB_STAT_RANGES[sub_stat][0] <= value <= SUB_STAT_RANGES[sub_stat][1]:
            return jsonify({"error": f"Sub stat {sub_stat} out of range"}), 400

    file_exists = os.path.isfile(echos_csv_path)
    with open(echos_csv_path, mode="a", newline="") as f:
        fieldnames = ["user_id", "echo_id", "cost", "main_stat", "sub_stats"]
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        if not file_exists:
            writer.writeheader()

        main_stat_json = json.dumps({main_stat_index: main_stat_value})
        sub_stats_json = json.dumps(sub_stats)

        echo_id = 0
        if file_exists:
            with open(echos_csv_path, mode="r") as read_file:
                reader = csv.DictReader(read_file)
                echo_id = max([int(row["echo_id"]) for row in reader] or [0]) + 1

        echo_data = {
            "user_id": user_id,
            "echo_id": echo_id,
            "cost": cost,
            "main_stat": main_stat_json,
            "sub_stats": sub_stats_json,
        }
        writer.writerow(echo_data)

    return jsonify({"response": "Echo data written to CSV", "data": echo_data})
