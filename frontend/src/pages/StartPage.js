import React from "react";

function StartPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Welcome to Frontlines CAD</h1>

      <a href="/login">
        <button style={{ margin: "20px", padding: "15px 30px" }}>
          Login
        </button>
      </a>

      <a href="/signup">
        <button style={{ margin: "20px", padding: "15px 30px" }}>
          Sign Up
        </button>
      </a>
    </div>
  );
}

export default StartPage;
