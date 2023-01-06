import React, { useState, ChangeEvent } from "react";

function Todo() {
  const [list, setList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addToList = () => {
    setList([inputValue, ...list]);
  };

  const deleteTodo = (index: number) => {
    setList(list.filter((list, i) => i !== index));
  };

  return (
    <div>
      <label>Todo:</label>
      <input onChange={(e) => handleChange(e)} type="text" />
      <input onClick={addToList} type="submit" value="Submit" />
      <ul>
        {list.map((item, i) => {
          return (
            <li key={i}>
              {item}
              <button onClick={() => deleteTodo(i)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
