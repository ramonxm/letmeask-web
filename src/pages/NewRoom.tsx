import { useState } from "react";
import { FormEvent } from "react";
import { Link } from "react-router-dom";
import { database } from "../services/firebase";
import { useAuth } from "../hooks/useAuth";
import Button from "../components/Button";
import "../styles/auth.scss";

const NewRoom = () => {
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState("");

  const handleCreateRoom = async (e: FormEvent) => {
    e.preventDefault();

    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });
  };
  return (
    <div id="page-auth">
      <aside>
        <img
          src="../assets/images/illustration.svg"
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src="../assets/images/logo.svg" alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(e) => setNewRoom(e.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existe? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default NewRoom;
