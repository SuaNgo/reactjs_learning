import Link from "next/link";
import classes from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <nav className={classes.navbar}>
      <label className={classes.logo}>Homepage</label>
      <input type="checkbox" id="check"></input>
      <label htmlFor="check" className={classes.bar}>
        <FontAwesomeIcon icon={faBars} className={classes.icon} />
      </label>
      <ul className={classes.nav_link}>
        <li>
          <Link className={classes.navigator} href="/calculator">
            Calculator
          </Link>
        </li>
        <li>
          <Link className={classes.navigator} href="/todos-app">
            Todo List
          </Link>
        </li>
      </ul>
    </nav>
  );
}
