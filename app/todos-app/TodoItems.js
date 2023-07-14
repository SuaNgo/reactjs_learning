import classes from "./Todo.module.css";

const TodoItems = ({ todos, deleteHandle, toggleCheckbox }) => {
  return (
    <div className={classes.todo_list}>
      <h1>Todo List</h1>
      {todos.length === 0 && "No Todo"}
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                id="checkbox"
                type="checkbox"
                checked={todo.checked}
                onChange={(event) =>
                  toggleCheckbox(todo.id, event.target.checked)
                }
                className={classes.ckb}
              />
              <label htmlFor="checkbox">{todo.title}</label>

              <button
                className={classes.del_btn}
                onClick={() => deleteHandle(todo.id)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoItems;
