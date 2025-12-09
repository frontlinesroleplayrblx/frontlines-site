import React, { useState } from "react";
import { Link } from "react-router-dom";

const BACKEND_URL = "https://frontlines-rp-rblx.onrender.com";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async () => {
    setMsg("Processing...");

    try {
      const response = await fetch(`${BACKEND_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      setMsg(data.msg);

      if (data.success) {
        // Redirect to the CAD dashboard after successful login
        window.location.href = "/units";
      }
    } catch (err) {
      console.error(err);
      setMsg("Error connecting to server.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />

      <button onClick={handleLogin}>Login</button>

      {msg && <p>{msg}</p>}

      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>

      <p>
        Back to <Link to="/">Start Page</Link>
      </p>
    </div>
  );
}
