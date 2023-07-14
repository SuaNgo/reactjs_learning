import Link from "next/link";
import TodosList from "./Todos";
import classes from "./Todo.module.css";
const TodoHome = () => {
  return (
    <div className={classes.content}>
      <h1>Todos Homepage</h1>
      <Link href="/">Back to hompage</Link>
      <TodosList />
    </div>
  );
};
export default TodoHome;
