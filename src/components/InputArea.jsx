import React, { useState } from "react";

function InputArea(props) {
  const [text, setText] = useState("");

  function handleInput(event) {
    setText(event.target.value);
  }

  return (
    <div className="form">
      <input onChange={handleInput} value={text} type="text" />
      <button
        onClick={() => {
          props.onAdd(text);
          setText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export { InputArea };
