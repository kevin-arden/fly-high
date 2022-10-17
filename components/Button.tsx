import Image from "next/image";
import React from "react";
import styleButton from "../styles/Button.module.sass";

const Button = ({
  children,
  classNames,
  logo,
}: {
  children: string;
  classNames: string;
  logo: string;
}) => {
  return (
    <button
      className={`${styleButton.button} 
    ${
      classNames === "primary"
        ? styleButton.button_main
        : styleButton.button_secondary
    }`}
    >
      <div>
        {logo ? (
          <Image src={`/${logo}`} width={15} height={15} alt="none" />
        ) : (
          <></>
        )}
        <>{children}</>
      </div>
    </button>
  );
};

export default Button;
