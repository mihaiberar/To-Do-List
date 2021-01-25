import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const [listItem, setListItem] = useState([]);

  function handleInput(event) {
    setText(event.target.value);
  }

  function handleClick(event) {
    setListItem((previousItems) => {
      return [...previousItems, text];
    });

    setText("");

    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} value={text} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItem.map((item) => {
            return (
              <li contentEditable="true" spellCheck="false">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
