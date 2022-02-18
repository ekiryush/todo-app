import React, { useRef } from "react";

const Form = ({ addItem, setFilter }) => {
  const inputRef = useRef(null);

  const addItemHandler = (e) => {
    e.preventDefault();
    addItem(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="controls">
      <form className="form input" onSubmit={addItemHandler}>
        <input ref={inputRef} type="text" placeholder="Add an item..."></input>
      </form>
      <form className="form select">
        <div className="select">
          <select name="todos" onChange={(evt) => setFilter(evt.target.value)}>
            <option value="all">All Tasks</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
