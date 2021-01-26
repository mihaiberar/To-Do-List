import React, { useState } from "react";
import { ToDoItem } from "./ToDoItem";
import { Heading } from "./Heading";
import { InputArea } from "./InputArea";

function App() {
  const [listItem, setListItem] = useState([]);

  function handleClick(text) {
    setListItem((previousItems) => {
      return [...previousItems, text];
    });
  }

  return (
    <div className="container">
      <Heading />
      <InputArea onAdd={handleClick} />
      <div>
        <ul>
          {listItem.map((toDoItem, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                contentEditable="true"
                spellCheck="false"
                item={toDoItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
