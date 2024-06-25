import json
import os


def load_config():
    config_path = os.path.join(os.path.dirname(__file__), "config.json")
    with open(config_path, "r") as file:
        return json.load(file)


CONFIG = load_config()
ONE_COST_MAIN_STAT_MAP = CONFIG["one_cost_main_stat_map"]
THREE_COST_MAIN_STAT_MAP = CONFIG["three_cost_main_stat_map"]
FOUR_COST_MAIN_STAT_MAP = CONFIG["four_cost_main_stat_map"]
ONE_COST_MAIN_STAT_VALUE = CONFIG["one_cost_main_stat_value"]
THREE_COST_MAIN_STAT_VALUE = CONFIG["three_cost_main_stat_value"]
FOUR_COST_MAIN_STAT_VALUE = CONFIG["four_cost_main_stat_value"]
SUB_STAT_MAP = CONFIG["sub_stat_map"]
SUB_STAT_RANGES = CONFIG["sub_stat_ranges"]
