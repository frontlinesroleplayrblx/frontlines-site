from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
import os

app = Flask(__name__)
CORS(app)

# Database connection
conn = psycopg2.connect(
    host=os.getenv("DB_HOST"),
    database=os.getenv("DB_NAME"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASS")
)
cur = conn.cursor()

# --- Routes ---

# Login
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    # Simple example; in production use hashed passwords
    cur.execute("SELECT * FROM users WHERE username=%s AND password_hash=%s", (username, password))
    user = cur.fetchone()
    if user:
        return jsonify({"success": True, "user": username})
    return jsonify({"success": False}), 401

# Get all units
@app.route("/units", methods=["GET"])
def get_units():
    cur.execute("SELECT id, name, status FROM units")
    units = [{"id": u[0], "name": u[1], "status": u[2]} for u in cur.fetchall()]
    return jsonify(units)

# Update unit status
@app.route("/units/<int:unit_id>/status", methods=["POST"])
def update_unit(unit_id):
    data = request.json
    new_status = data.get("status")
    cur.execute("UPDATE units SET status=%s, last_update=NOW() WHERE id=%s", (new_status, unit_id))
    conn.commit()
    return jsonify({"success": True})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
