import "../styles/room-code.scss";

type RoomCodeProps = {
  code: string;
};

const RoomCode = (props: RoomCodeProps) => {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(props.code);
  };
  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src="/assets/images/copy.svg" alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
};

export default RoomCode;
