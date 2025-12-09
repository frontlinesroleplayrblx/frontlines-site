from flask import Flask, request, jsonify
from flask_cors import CORS # type: ignore
import psycopg2 # type: ignore
import os

app = Flask(__name__)
CORS(app)

# PostgreSQL connection
conn = psycopg2.connect(
    host=os.getenv("DB_HOST"),
    database=os.getenv("DB_NAME"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASS")
)
cur = conn.cursor()

# Example: Users table
# CREATE TABLE users (id SERIAL PRIMARY KEY, username TEXT UNIQUE, password TEXT);
# Example: Units table
# CREATE TABLE units (id SERIAL PRIMARY KEY, name TEXT, status TEXT);

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    
    cur.execute("SELECT * FROM users WHERE username=%s AND password=%s", (username, password))
    user = cur.fetchone()
    
    if user:
        return jsonify({"success": True})
    else:
        return jsonify({"success": False})

@app.route("/units", methods=["GET"])
def get_units():
    cur.execute("SELECT id, name, status FROM units")
    rows = cur.fetchall()
    units = [{"id": r[0], "name": r[1], "status": r[2]} for r in rows]
    return jsonify(units)

@app.route("/units/<int:unit_id>/status", methods=["POST"])
def update_unit(unit_id):
    data = request.get_json()
    new_status = data.get("status")
    cur.execute("UPDATE units SET status=%s WHERE id=%s", (new_status, unit_id))
    conn.commit()
    return jsonify({"success": True})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
