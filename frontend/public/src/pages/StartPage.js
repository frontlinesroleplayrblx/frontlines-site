import React from "react";
import { Link } from "react-router-dom";

function StartPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to CAD</h1>
      <p>Click below to log in</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default StartPage;
