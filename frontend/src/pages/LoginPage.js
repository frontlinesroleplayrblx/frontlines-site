import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BACKEND_URL = "https://frontlines-rp-rblx.onrender.com";

export default function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");       // message to display
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      setMsg("Please enter username and password");
      return;
    }

    setLoading(true);
    setMsg("Logging in...");

    try {
      const response = await fetch(`${BACKEND_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      setMsg(data.msg);
      setLoading(false);

      if (data.success) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", username);
        navigate("/units");
      }
    } catch (err) {
      console.error(err);
      setMsg("Unable to connect to server");
      setLoading(false);
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

      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>

      {msg && <p>{msg}</p>}

      <p>
        Back to <Link to="/">Start Page</Link>
      </p>

      <p>
        No account? Sign up <Link to="/signup">here</Link>
      </p>
    </div>
  );
}
