import React, { useState } from "react";

function ToDoItem(props) {
  const [line, setLine] = useState(false);

  function lineThrough() {
    setLine((previousValue) => {
      return !previousValue ? true : false;
    });
  }

  return (
    <li
      style={{ textDecoration: line ? "line-through" : "none" }}
      onClick={lineThrough}
      contentEditable={props.contentEditable}
      spellCheck={props.spellCheck}
      key={props.key}
      id={props.id}
    >
      {props.item}
    </li>
  );
}

export { ToDoItem };
