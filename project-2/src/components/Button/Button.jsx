import React from "react";
import { BiMessage } from "react-icons/bi";
import styles from "./Button.module.css";
const Button = ({ isOutline, icon, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={isOutline ? styles.outline_btn : styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
