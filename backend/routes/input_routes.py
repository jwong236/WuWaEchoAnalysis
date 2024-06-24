from flask import Blueprint, request, jsonify

input_bp = Blueprint("input", __name__)


@input_bp.route("/ping", methods=["GET"])
def input():
    return jsonify({"response": "pong"})
