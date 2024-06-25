from .echos_routes import echos_bp


def register_blueprints(app):
    app.register_blueprint(echos_bp, url_prefix="/echos")
