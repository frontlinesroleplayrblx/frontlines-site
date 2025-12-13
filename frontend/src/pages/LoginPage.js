import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      setMsg("Please enter username and password");
      return;
    }

    setLoading(true);
    setMsg("Logging in...");

    try {
      const response = await fetch("https://frontlines-rp-rblx.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      setMsg(data.msg);
      setLoading(false);

      if (data.success) {
        // In a real app with routing: navigate("/units");
        setMsg("Login successful!");
      }
    } catch (err) {
      console.error(err);
      setMsg("Unable to connect to server");
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto mt-28 max-w-md px-6">
      <h2 className="text-3xl font-semibold">Welcome Back</h2>
      <p className="mt-2 text-sm text-zinc-400">Log in to continue</p>
      
      <div className="mt-6 space-y-4">
        <div className="overflow-hidden rounded-lg border border-white/10 bg-zinc-900">
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-3 text-sm placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-3 text-sm placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            {msg && (
              <div className={`rounded-lg border px-4 py-3 text-sm ${
                msg.includes("success") || msg === "Logging in..." 
                  ? "border-indigo-500/20 bg-indigo-500/10 text-indigo-400" 
                  : "border-red-500/20 bg-red-500/10 text-red-400"
              }`}>
                {msg}
              </div>
            )}

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </div>

        <div className="text-center space-y-2 text-sm text-zinc-400">
          <p>
            <a href="/" className="text-indigo-400 hover:text-indigo-300">
              ← Back to Start Page
            </a>
          </p>
          <p>
            No account?{" "}
            <a href="/signup" className="text-indigo-400 hover:text-indigo-300">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}