import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

type ChatMessage = {
  role: "user" | "ai";
  message: string;
};

export default function Chat() {
  const { id } = useParams<{ id: string }>();

  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!msg.trim()) return;

    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/api/chat",
        {
          patientId: id,
          message: msg,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        }
      );

      setChat((prev) => [
        ...prev,
        { role: "user", message: msg },
        { role: "ai", message: res.data.reply },
      ]);

      setMsg("");
    } catch (err: any) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Chat</h1>

      <div style={{ marginBottom: 20 }}>
        {chat.map((c, i) => (
          <div key={i}>
            <b>{c.role}:</b> {c.message}
          </div>
        ))}
      </div>

      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Type message..."
      />

      <button onClick={send} disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
    </div>
  );
}
