from flask import Flask
from dotenv import load_dotenv
import os

from routes.health import health_bp

load_dotenv()

app = Flask(__name__)

app.register_blueprint(health_bp, url_prefix="/api/v1")


@app.route("/")
def home():
    app_name = os.getenv("APP_NAME")
    return app_name


if __name__ == "__main__":
    app.run(debug=True)