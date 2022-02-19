import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [list, setList] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [filter, setFilter] = useState("all");

  const addItem = (item) => {
    if (item.length > 0) {
      setList((prevState) => {
        return [...prevState, item];
      });
    }
  };

  const addCompleted = (completeditem) => {
    if (!completed.includes(completeditem)) {
      setCompleted((prevState) => {
        return [...prevState, completeditem];
      });
    } else {
      const newList = completed.filter((item) => {
        return item !== completeditem;
      });
      setCompleted(newList);
    }
  };

  const removeItem = (removeditem) => {
    if (list.length > 0) {
      const newList = list.filter((listitem) => {
        return listitem !== removeditem;
      });
      setList(newList);
      const newCompletedList = completed.filter((completeditem) => {
        return completeditem !== removeditem;
      });
      setCompleted(newCompletedList);
    }
  };

  return (
    <div className="App">
      <h1 className="heading">My To-do List</h1>
      <Form addItem={addItem} setFilter={setFilter} />
      <TodoList
        list={list}
        completed={completed}
        addCompleted={addCompleted}
        removeItem={removeItem}
        filter={filter}
      />
    </div>
  );
}

export default App;
