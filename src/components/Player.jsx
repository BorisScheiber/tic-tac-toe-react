import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(!isEditing);  // wert umkehren nicht so da asynchron
    setIsEditing(prevState => !prevState);
  }

  function handleChange(event) {
    console.log(event.target.tagName);
    
    setPlayerName(event.target.value);
  }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    // let buttonText = "Edit"; // so oder ternary operator unten
  
    if (isEditing) {
        editablePlayerName = <input type="text" value={playerName} onChange={handleChange} required />
        // buttonText = "Save";
    }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
