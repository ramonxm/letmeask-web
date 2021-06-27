import Button from "../components/Button";
import "../styles/auth.scss";

const NewRoom = () => {
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
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existe? <a href="#">Clique aqui</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default NewRoom;
