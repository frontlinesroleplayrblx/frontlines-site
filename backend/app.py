from flask import Flask, request, jsonify
from flask_cors import CORS # type: ignore

app = Flask(__name__)
CORS(app)

# TEMP in-memory user store
# Replace with database later
users = {}

@app.post("/signup")
def signup():
    data = request.json
    u = data.get("username")
    p = data.get("password")

    if not u or not p:
        return jsonify(success=False, msg="Missing username or password"), 400

    if u in users:
        return jsonify(success=False, msg="User already exists"), 409

    users[u] = p
    return jsonify(success=True, msg="Signup successful")


@app.post("/login")
def login():
    data = request.json
    u = data.get("username")
    p = data.get("password")

    if u not in users:
        return jsonify(success=False, msg="User does not exist"), 404

    if users[u] != p:
        return jsonify(success=False, msg="Incorrect password"), 401

    return jsonify(success=True, msg="Login successful")


@app.get("/units")
def units():
    # Static example data (replace later)
    return jsonify([
        {"id": 1, "name": "Unit 101", "status": "Available"},
        {"id": 2, "name": "Unit 102", "status": "Busy"}
    ])


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
