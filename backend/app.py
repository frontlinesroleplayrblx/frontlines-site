from flask import Flask, request, jsonify
from flask_cors import CORS
from google.oauth2 import service_account
from googleapiclient.discovery import build
import bcrypt
import os

app = Flask(__name__)
CORS(app)

SPREADSHEET_ID = "YOUR_SHEET_ID"
RANGE_NAME = "A2:C"

SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"]

creds = service_account.Credentials.from_service_account_file(
    "backend/google-service-account.json",
    scopes=SCOPES
)

service = build("sheets", "v4", credentials=creds)
sheet = service.spreadsheets()

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify(success=False, msg="Missing credentials")

    result = sheet.values().get(
        spreadsheetId=SPREADSHEET_ID,
        range=RANGE_NAME
    ).execute()

    rows = result.get("values", [])

    for row in rows:
        sheet_user = row[0]
        sheet_hash = row[1]

        if sheet_user == username:
            if bcrypt.checkpw(password.encode(), sheet_hash.encode()):
                return jsonify(success=True, msg="Login successful")

            return jsonify(success=False, msg="Invalid password")

    return jsonify(success=False, msg="User not found")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
