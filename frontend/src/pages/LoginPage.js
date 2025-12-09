import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setMessage("Checking...");
    try {
      const res = await fetch("https://frontlines-rp-rblx.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      setMessage(data.msg);

      if (data.success) {
        setTimeout(() => navigate("/cad"), 1000);
      }
    } catch {
      setMessage("Could not connect to server.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br /><br />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />

      <button onClick={handleLogin}>Login</button>

      <p style={{ color: "red", marginTop: "20px" }}>
        {message}
      </p>

      <p>
        <a href="/signup">Create an account</a>
      </p>
    </div>
  );
}

export default LoginPage;
