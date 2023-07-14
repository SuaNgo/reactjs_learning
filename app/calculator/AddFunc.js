import { useRef } from "react";

export default function AddFunc({ dispatch, func, type, className }) {
  const buttonRef = useRef(null);

  function handleClick() {
    buttonRef.current.blur(); // removing focus
    dispatch({ type: type, payload: { func } });
  }
  return (
    <button className={className} onClick={handleClick} ref={buttonRef}>
      {func}
    </button>
  );
}
