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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
      `}</style>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-center relative">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <h1 className="text-3xl font-bold text-white relative z-10" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.05em' }}>
              Welcome Back
            </h1>
            <p className="text-blue-100 mt-2 relative z-10">Log in to continue your journey</p>
          </div>

          {/* Form */}
          <div className="p-8">
            <div className="space-y-6">
              {/* Username Input */}
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
                />
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
                />
              </div>

              {/* Message Display */}
              {msg && (
                <div className={`p-3 rounded-lg text-center text-sm font-medium ${
                  msg.includes("success") || msg === "Logging in..." 
                    ? "bg-blue-900 bg-opacity-50 text-blue-200 border border-blue-700" 
                    : "bg-red-900 bg-opacity-50 text-red-200 border border-red-700"
                }`}>
                  {msg}
                </div>
              )}

              {/* Login Button */}
              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                style={{ animation: loading ? 'none' : 'pulse-glow 2s ease-in-out infinite' }}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>

            {/* Links */}
            <div className="mt-6 pt-6 border-t border-gray-700 text-center space-y-3">
              <p className="text-gray-400 text-sm">
                <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                  ← Back to Start Page
                </Link>
              </p>
              <p className="text-gray-400 text-sm">
                No account?{" "}
                <Link to="/signup" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
