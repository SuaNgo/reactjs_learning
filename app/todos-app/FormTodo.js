import { useState } from "react";
import classes from "./Todo.module.css";

const FormTodo = ({ onSubmit }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleClick = (event) => {
    event.preventDefault();

    if (newTodo === "") return;
    onSubmit(newTodo);
    setNewTodo("");
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <div className={classes.input_field}>
          <h1>New job</h1>
          <input
            autoFocus
            type="text"
            id="item"
            onChange={(event) => setNewTodo(event.target.value)}
            value={newTodo}
          />
        </div>
        <button className={classes.submit_btn}>Submit</button>
      </form>
    </>
  );
};

export default FormTodo;
