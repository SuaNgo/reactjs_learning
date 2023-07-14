import { useRef } from "react";
import { actions } from "./chooseActions";

export default function AddNumber({ dispatch, number, className }) {
  const buttonRef = useRef(null);

  function handleClick() {
    buttonRef.current.blur(); // removing focus
    dispatch({ type: actions.add_number, payload: { number } });
  }
  return (
    <button className={className} ref={buttonRef} onClick={handleClick}>
      {number}
    </button>
  );
}
