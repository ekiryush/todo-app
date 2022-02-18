import React from "react";

const TodoItem = ({ item, addCompleted, removeItem }) => {
  return (
    <div>
      <div>{item}</div>
      <button onClick={() => addCompleted(item)}>
        <i className="fas fa-check"></i>
      </button>
      <button onClick={() => removeItem(item)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;
