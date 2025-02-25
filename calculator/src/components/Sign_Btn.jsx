import React from "react";

export const Sign_Btn = ({ sign, onClick }) => {
  return <button onClick={() => onClick(sign)}>{sign}</button>;
};
