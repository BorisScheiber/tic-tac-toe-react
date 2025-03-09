import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(!isEditing);
    setIsEditing(prevState => !prevState);
  }

    let playerName = <span className="player-name">{name}</span>
    // let buttonText = "Edit"; // so oder ternary operator unten
  
    if (isEditing) {
        playerName = <input type="text" value={name} required />
        // buttonText = "Save";
    }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
