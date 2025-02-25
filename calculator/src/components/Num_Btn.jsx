import React from "react";

export const Num_Btn = ({ num, onClick }) => {
  return <button onClick={() => onClick(num)}>{num}</button>;
};
