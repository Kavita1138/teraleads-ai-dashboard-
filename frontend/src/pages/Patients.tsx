import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

type Patient = {
  id: string;
  name: string;
  email: string;
};

export default function Patients() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/patients", {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      })
      .then((res) => setPatients(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Patients</h1>

      {patients.map((p) => (
        <div key={p.id}>
          {p.name} - {p.email}
          <Link to={`/chat/${p.id}`} style={{ marginLeft: 10 }}>
            Chat
          </Link>
        </div>
      ))}
    </div>
  );
}
