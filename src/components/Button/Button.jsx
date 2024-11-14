import React from "react";
import "./Button.css";

const Button = ({ val, className, style, onClick }) => {
  return (
    <button className={`btn ${className}`} style={style} onClick={onClick}>
      {val || "button"}
    </button>
  );
};

export default Button;
