from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, world!"

@app.route("/api")
def api():
    return jsonify({"message": "This is your backend!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
