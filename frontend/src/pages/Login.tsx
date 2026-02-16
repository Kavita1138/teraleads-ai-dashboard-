import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/api/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      navigate("/patients");
    } catch (err: any) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={login}>Login</button>

      <p>
        Don't have account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
