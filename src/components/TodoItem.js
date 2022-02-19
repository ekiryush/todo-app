import React from "react";

const TodoItem = ({ item, completed, addCompleted, removeItem }) => {
  return (
    <div className="item">
      <div className={`text ${completed ? "crossed" : ""}`}>{item}</div>
      <div className="buttons">
        <button onClick={() => addCompleted(item)}>
          <i className="fas fa-check"></i>
        </button>
        <button onClick={() => removeItem(item)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
      {completed ? console.log("completed!") : ""}
    </div>
  );
};

export default TodoItem;
