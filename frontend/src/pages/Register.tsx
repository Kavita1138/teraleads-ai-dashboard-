import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await axios.post("http://127.0.0.1:5000/api/register", {
        email,
        password,
      });

      alert("Registration successful");
      navigate("/");
    } catch (err: any) {
      alert("Registration failed");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Register</h1>

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

      <button onClick={register}>Register</button>

      <p>
        Already have account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}
