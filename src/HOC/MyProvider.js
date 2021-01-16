import MyContext from "./MyContext"
import { useState } from "react";

import React from 'react'

const MyProvider = (props) => {
    const [input, setInput] = useState("");

  const changeInputHandler = (event) => {
    try {
      setInput(input + event.target.innerHTML);
    } catch {
      setInput("ERROR");
    }
  };

  const deleteInputHandler = () => {
    try {
      setInput(input.slice(0, -1));
    } catch {
      setInput("ERROR");
    }
  };

  const deleteEveryInputHandler = () => {
      setInput("");
  };

  const calculateOutputHandler = () => {
    try {
      // eslint-disable-next-line
      setInput(eval(input));
    } catch {
      setInput("ERROR");
    }
  };
  const calcSqrt = () => {
    setInput(Math.sqrt(input))
  }

  const calcExp = () => {
    setInput((input * input))
  }

    
    return (
        <MyContext.Provider
        value={{
            input: input,
            changeInput: changeInputHandler,
            delLastInput: deleteInputHandler,
            delAllInput: deleteEveryInputHandler,
            calcOutput: calculateOutputHandler,
            calcSqrt: calcSqrt,
            calcExp: calcExp
        }}
        >    
            {props.children}
        </MyContext.Provider>
    )
}

export default MyProvider
