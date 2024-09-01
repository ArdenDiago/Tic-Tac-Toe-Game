import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing(() => !isEditing);
  }

  function hadleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
    if (isEditing) {
      onChangeName(symbol, playerName)
    }
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //   let btnCaption = "Edit";
  if (isEditing) {
    editablePlayerName = (
      <span>
        <input type="text" value={playerName} onChange={hadleChange} required />
      </span>
    );
    // btnCaption = "Save";
  }
  return (
    <>
      <li className={isActive ? 'active': undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
