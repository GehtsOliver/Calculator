import React from "react";

const Button = (props) => {
  const numbersRegEx = /^[0-9]+$/,
    operatorRegEx = /^[+-/X*=%]+$/,
    controlRegEx = /^[CAC]+$/;

  let classToApply = "";

  const propsCheck = props.children.match(numbersRegEx)
    ? (classToApply = "Calc")
    : props.children.match(operatorRegEx)
    ? (classToApply = "Operator")
    : props.children.match(controlRegEx)
    ? (classToApply = "Ctrl")
    : (classToApply = "");


  return <div className={"Btn " + classToApply}>{props.children}</div>;
};

export default Button;
