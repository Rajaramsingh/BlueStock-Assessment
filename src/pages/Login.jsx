import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Logging in...", { email, password });
    navigate("/careers"); // Redirect after login
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold">Login</h2>
      <form className="mt-4 space-y-4" onSubmit={handleLogin}>
        <input className="p-2 border rounded" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="p-2 border rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Login</button>
      </form>
    </div>
  );
}
