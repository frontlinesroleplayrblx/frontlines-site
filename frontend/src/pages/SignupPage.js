import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api";

export default function SignupPage() {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submit() {
    const result = await signup(username, password);
    if (result.success) nav("/");
    else alert(result.error);
  }

  return (
    <div className="center">
      <h1>Create Account</h1>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={submit}>Sign Up</button>
    </div>
  );
}
