import os
from flask import Blueprint, send_from_directory, current_app as app

serve_bp = Blueprint("serve", __name__)


@serve_bp.route("/", defaults={"path": ""})
@serve_bp.route("/<path:path>")
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")
