import { useState } from "react";
import { Display } from "./Display";
import { Buttons } from "./Buttons";

export const CalBody = () => {
  const [count, setCount] = useState(0);

  const addToDisplay = (num) => {
    setCount((prevCount) => prevCount + num.toString());
  };
  return (
    <div className="cal-body">
      <Display count={count} />
      <Buttons onClick={addToDisplay} />
    </div>
  );
};
