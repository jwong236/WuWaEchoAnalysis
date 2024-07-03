from flask import Flask
from flask_cors import CORS
import os
from routes import register_blueprints
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, static_folder="dist")
CORS(app)

register_blueprints(app)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
