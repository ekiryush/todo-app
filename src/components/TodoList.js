import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ list, completed, addCompleted, removeItem, filter }) => {
  let todoList = list;

  if (filter === "completed") {
    todoList = completed;
  }

  if (filter === "uncompleted") {
    todoList = list.filter((item) => {
      return !completed.includes(item);
    });
  }

  return (
    <div>
      <ul>
        {todoList &&
          todoList.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              addCompleted={addCompleted}
              removeItem={removeItem}
            />
          ))}
      </ul>
      {todoList.length === 0 && <p className="fallback">No Items Found</p>}
    </div>
  );
};

export default TodoList;
