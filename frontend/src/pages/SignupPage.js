import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BACKEND_URL = "https://frontlines-rp-rblx.onrender.com";

export default function SignupPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSignup = async () => {
    setMsg("Creating account...");

    try {
      const response = await fetch(`${BACKEND_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      setMsg(data.msg);

      if (data.success) {
        // Redirect to login after successful signup
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (err) {
      console.error(err);
      setMsg("Server connection failed.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>
            sign up page
        </p>

        <p>
            Already have an account? <Link to="/login">Login</Link>
        </p>

        <p>
            Back to <Link to="/">Start Page</Link>
        </p>
    </div>
  );
}
