import React, { useState } from "react";
import { Link } from "react-router-dom";

const BACKEND_URL = "https://frontlines-rp-rblx.onrender.com";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSignup = async () => {
    setMsg("Processing...");

    try {
      const response = await fetch(`${BACKEND_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      setMsg(data.msg);

      if (data.success) window.location.href = "/";
    } catch {
      setMsg("Error connecting to server.");
    }
  };

  return (
    <div>
      <h1>Create Account</h1>

      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleSignup}>Sign Up</button>

      <p>{msg}</p>

      <Link to="/">Back to Login</Link>
    </div>
  );
}
