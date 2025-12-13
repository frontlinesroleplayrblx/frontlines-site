from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import json

from google.oauth2 import service_account
from googleapiclient.discovery import build

app = Flask(__name__)
CORS(app)

# =========================
# Google Sheets Config
# =========================

SPREADSHEET_ID = os.environ.get("SPREADSHEET_ID")
RANGE_NAME = "A2:B"  # username | password

if not SPREADSHEET_ID:
    raise RuntimeError("SPREADSHEET_ID environment variable not set")

# Load service account credentials from env var
service_account_info = json.loads(
    os.environ["GOOGLE_SERVICE_ACCOUNT_JSON"]
)

SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"]

creds = service_account.Credentials.from_service_account_info(
    service_account_info,
    scopes=SCOPES
)

service = build("sheets", "v4", credentials=creds)
sheet = service.spreadsheets()

# =========================
# Routes
# =========================

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    print("Received data:", data)

    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify(success=False, msg="Missing username or password")

    result = sheet.values().get(
        spreadsheetId=SPREADSHEET_ID,
        range=RANGE_NAME
    ).execute()

    rows = result.get("values", [])
    print("Sheet rows:", rows)

    for row in rows:
        if len(row) < 2:
            continue

        sheet_user = row[0].strip()
        sheet_password = row[1].strip()

        if sheet_user == username:
            if sheet_password == password:
                return jsonify(success=True, msg="Login successful")
            return jsonify(success=False, msg="Invalid password")

    return jsonify(success=False, msg="User does not exist")

@app.route("/health", methods=["GET"])
def health():
    return jsonify(status="ok")

# =========================
# Run
# =========================

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
