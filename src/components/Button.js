import React from "react";

const Button = (props) => {

  const numbersRegEx = /^[0-9.]+$/,
    operatorRegEx = /^[+-/%*=]+$/,
    controlRegEx = /^[CE()AC√πx²DEL]+$/;

  let classToApply = "";
  let onClickHandler = null;

  props.inputHandler
    ? (onClickHandler = props.inputHandler)
    : props.delLastInput
    ? (onClickHandler = props.delLastInput)
    : props.delAllInput
    ? (onClickHandler = props.delAllInput)
    : props.calcOutput
    ? (onClickHandler = props.calcOutput)
    : (onClickHandler = null);

    
  props.children.match(numbersRegEx)
    ? (classToApply = "Calc")
    : props.children.trim().match(operatorRegEx)
    ? (classToApply = "Operator")
    : props.children.match(controlRegEx)
    ? (classToApply = "Ctrl")
    : (classToApply = "");

    // if(props.children.match(numbersRegEx)){
    //   classToApply = "Calc";
    //   onClickHandler = props.inputHandler
    // } else if (props.children.trim().match(operatorRegEx)){
    //   classToApply = "Operator";
    //   onClickHandler = props.inputHandler
    // } else if (props.children.match(controlRegEx)&& ){
    //   classToApply = "Ctrl"
    // }

  return (
    <button
      onClick={onClickHandler}
      className={"Btn " + classToApply}
    >
      {props.children}
    </button>
  );
};

export default Button;
