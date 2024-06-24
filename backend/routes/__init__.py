from .input_routes import input_bp


def register_blueprints(app):
    app.register_blueprint(input_bp, url_prefix="/input")
