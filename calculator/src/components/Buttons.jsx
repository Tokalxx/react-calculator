import React from "react";
import { Num_Btn } from "./Num_Btn";
import { Sign_Btn } from "./Sign_Btn";

export const Buttons = ({ onClick }) => {
  return (
    <div className="cal-buttons">
      <div className="div-row">
        <Num_Btn num={7} onClick={onClick} />
        <Num_Btn num={8} onClick={onClick} />
        <Num_Btn num={9} onClick={onClick} />
        <Sign_Btn sign={"+"} onClick={onClick} />
      </div>
      <div className="div-row">
        <Num_Btn num={4} onClick={onClick} />
        <Num_Btn num={5} onClick={onClick} />
        <Num_Btn num={6} onClick={onClick} />
        <Sign_Btn sign={"-"} onClick={onClick} />
      </div>
      <div className="div-row">
        <Num_Btn num={1} onClick={onClick} />
        <Num_Btn num={2} onClick={onClick} />
        <Num_Btn num={3} onClick={onClick} />
        <Sign_Btn sign={"//"} onClick={onClick} />
      </div>
      <div className="div-row">
        <Num_Btn num={0} onClick={onClick} />
        <Sign_Btn sign={"."} onClick={onClick} />
        <Sign_Btn sign={"*"} onClick={onClick} />
        <Sign_Btn sign={"="} onClick={onClick} />
      </div>
    </div>
  );
};
