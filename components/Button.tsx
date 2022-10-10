import React from "react";
import style from "../styles/Home.module.sass";

const Button = ({ children, classNames }: { children: string; classNames: string }) => {
  return (
    <button
      className={`${style.button} 
    ${classNames === "primary" ? style.button_main : style.button_secondary}`}
    >
      {children}
    </button>
  );
};

export default Button;
