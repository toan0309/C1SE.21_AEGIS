from flask import Blueprint, jsonify 
# Dung de nhom cac API lien quan voi nhau

health_bp = Blueprint("health", __name__)

@health_bp.route("/health", methods=["GET"])
def health_check():
    return jsonify({
        "status": "ok",
        "message": "AEGIS Backend is running"
    })