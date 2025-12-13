from flask import Flask, request, jsonify
from flask_cors import CORS
from google.oauth2 import service_account
from googleapiclient.discovery import build

app = Flask(__name__)
CORS(app)

SPREADSHEET_ID = "1iD_5fdFBoD8rsyDywGcWxaPe3xOJkLKppb2YWZWGcEk"
RANGE_NAME = "A2:B"

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
    print("Received data:", data)

    username = data.get("username")
    password = data.get("password")

    result = sheet.values().get(
        spreadsheetId=SPREADSHEET_ID,
        range=RANGE_NAME
    ).execute()

    rows = result.get("values", [])
    print("Sheet rows:", rows)

    for row in rows:
        print("Checking row:", row)

        sheet_user = row[0].strip()
        sheet_password = row[1].strip()

        if sheet_user == username:
            if sheet_password == password:
                return jsonify(success=True, msg="Login successful")
            return jsonify(success=False, msg="Invalid password")

    return jsonify(success=False, msg="User does not exist")

# === Run server ===
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
