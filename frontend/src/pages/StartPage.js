import React from "react";
import { Link } from "react-router-dom";
import '../styles.css';

export default function StartPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontlines Roleplay</h1>
      <p>
        <Link to="/login">Login</Link>
      </p>
      <p>
        <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}
