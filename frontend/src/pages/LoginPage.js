import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";

export default function LoginPage() {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submit() {
    const result = await login(username, password);
    if (result.success) nav("/start");
    else alert(result.error);
  }

  return (
    <div className="center">
      <h1>Login</h1>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={submit}>Login</button>

      <p>
        No account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
}
