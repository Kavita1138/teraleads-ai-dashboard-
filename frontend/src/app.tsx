import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Patients from "./pages/Patients";
import Chat from "./pages/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/chat/:id" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
