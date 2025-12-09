import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    setMessage("Creating account...");
    try {
      const res = await fetch("https://frontlines-rp-rblx.onrender.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      setMessage(data.msg);

      if (data.success) {
        setTimeout(() => navigate("/login"), 1200);
      }
    } catch {
      setMessage("Could not connect to server.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Create Account</h1>

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

      <button onClick={handleSignup}>Sign Up</button>

      <p style={{ color: "red", marginTop: "20px" }}>
        {message}
      </p>

      <p>
        <a href="/login">Already have an account? Login</a>
      </p>
    </div>
  );
}

export default SignupPage;
