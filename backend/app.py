from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
import os

app = Flask(__name__)
CORS(app)

DB_URL = os.environ.get("DB_URL")


def run_query(query, values=None):
    conn = psycopg2.connect(DB_URL)
    cur = conn.cursor()
    cur.execute(query, values)
    conn.commit()
    try:
        data = cur.fetchall()
    except:
        data = None
    cur.close()
    conn.close()
    return data


@app.post("/signup")
def signup():
    data = request.json
    username = data["username"]
    password = data["password"]

    exists = run_query("SELECT id FROM users WHERE username=%s", (username,))
    if exists:
        return jsonify({"error": "User already exists"})

    run_query("INSERT INTO users (username, password) VALUES (%s, %s)", (username, password))
    return jsonify({"success": True})


@app.post("/login")
def login():
    data = request.json
    username = data["username"]
    password = data["password"]

    user = run_query(
        "SELECT id FROM users WHERE username=%s AND password=%s",
        (username, password),
    )
    if not user:
        return jsonify({"error": "Invalid credentials"})

    return jsonify({"success": True})


if __name__ == "__main__":
    app.run(host="0.0.0.0")
