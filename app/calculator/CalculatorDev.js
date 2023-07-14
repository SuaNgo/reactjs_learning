"use client";
import { useReducer } from "react";
import classes from "./Calculator.module.css";
import AddNumber from "./AddNumber";
import AddFunc from "./AddFunc";

import { actions } from "./chooseActions";
const reducer = (state, { type, payload }) => {
  switch (type) {
    case actions.add_number:
      if (payload.number === "0" && state.currentNumber === "0") return state;
      if (payload.number === "." && state.currentNumber == null) return state;
      if (payload.number === "." && state.currentNumber.includes("."))
        return state;

      if (payload.number !== "0" && state.currentNumber === "0")
        return {
          ...state,
          currentNumber: payload.number,
        };
      return {
        ...state,
        currentNumber: `${state.currentNumber || ""}${payload.number}`,
      };

    case actions.add_function:
      if (state.currentNumber == null && state.previousNumber == null)
        return {};
      if (state.previousNumber == null)
        return {
          ...state,
          previousNumber: state.currentNumber,
          func: payload.func,
          currentNumber: null,
        };
      if (state.previousNumber != null && state.currentNumber == null)
        return {
          ...state,
          func: payload.func,
        };
      return {
        ...state,
        previousNumber: result(state),
        func: payload.func,
        currentNumber: null,
      };
    case actions.clear:
      return {};

    case actions.delete_number:
      if (state.currentNumber == null) return {};
      return {
        ...state,
        currentNumber: state.currentNumber.slice(0, -1),
      };
    case actions.result:
      if (state.currentNumber == null) return state;
      if (state.currentNumber != null && state.previousNumber == null)
        return state;
      return {
        ...state,
        previousNumber: null,
        func: null,
        currentNumber: result(state),
      };
  }
};

const result = ({ currentNumber, previousNumber, func }) => {
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);
  if (prev == null && current == null) return "";
  let result = "";
  switch (func) {
    case "+":
      result = current + prev;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = current * prev;
      break;
    case "/":
      result = prev / current;
      break;
  }
  return result.toString();
};

const FORMAT = new Intl.NumberFormat("en-us");

const formatNumber = (number) => {
  if (number == null) return;
  const [integer, decimal] = number.split(".");
  if (decimal == null) return FORMAT.format(integer);
  return `${FORMAT.format(integer)}.${decimal}`;
};

const Calculator = () => {
  const [{ previousNumber, currentNumber, func }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className={classes.div_grid}>
      <h1 className={`${classes.span_two} ${classes.title}`}>Calculator</h1>
      <div className={classes.notes}>
        <h1 className={classes.note_heading}>Some notes</h1>
        <ul>
          <li className={classes.note_list}>First project</li>
          <li className={classes.note_list}>Code isnt optimized</li>
          <li className={classes.note_list}>Not responsive</li>
        </ul>
      </div>
      <div className={classes.calculator_grid}>
        <div className={classes.output}>
          <div className={classes.previous_number}>
            {formatNumber(previousNumber)} {func}
          </div>
          <div className={classes.current_number}>
            {formatNumber(currentNumber)}
          </div>
        </div>

        <AddFunc
          className={classes.span_two}
          func="AC"
          dispatch={dispatch}
          type={actions.clear}
        >
          AC
        </AddFunc>
        <AddFunc func="DEL" dispatch={dispatch} type={actions.delete_number}>
          DEL
        </AddFunc>
        <AddFunc
          func="/"
          dispatch={dispatch}
          type={actions.add_function}
        ></AddFunc>
        <AddNumber number="9" dispatch={dispatch}></AddNumber>

        <AddNumber number="8" dispatch={dispatch}></AddNumber>
        <AddNumber number="7" dispatch={dispatch}></AddNumber>
        <AddFunc
          func="+"
          dispatch={dispatch}
          type={actions.add_function}
        ></AddFunc>
        <AddNumber number="6" dispatch={dispatch}></AddNumber>
        <AddNumber number="5" dispatch={dispatch}></AddNumber>

        <AddNumber number="4" dispatch={dispatch}></AddNumber>
        <AddFunc
          func="-"
          dispatch={dispatch}
          type={actions.add_function}
        ></AddFunc>
        <AddNumber number="3" dispatch={dispatch}></AddNumber>
        <AddNumber number="2" dispatch={dispatch}></AddNumber>
        <AddNumber number="1" dispatch={dispatch}></AddNumber>
        <AddFunc
          func="*"
          dispatch={dispatch}
          type={actions.add_function}
        ></AddFunc>
        <AddNumber
          className={classes.span_two}
          number="0"
          dispatch={dispatch}
        ></AddNumber>
        <AddNumber number="." dispatch={dispatch}></AddNumber>
        <AddFunc func="=" dispatch={dispatch} type={actions.result}></AddFunc>
      </div>
    </div>
  );
};

export default Calculator;
