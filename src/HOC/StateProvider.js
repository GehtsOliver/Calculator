import StateContext from "./StateContext";
import { useState } from "react";

import React from "react";

const StateProvider = (props) => {
  const endsWithOperator = /[*+/]$/

  const [input, setInput] = useState("0"),
    [output, setOutput] = useState(""),
    [calculated, setCalculated] = useState(false),
    [decimalSet, setDecimalSet] = useState(false);


  const numberInputHandler = (e) => {
    try {
      if (!calculated) {
        setInput((prevInput) =>
          prevInput === "0" ? e.target.value : prevInput + e.target.value
        );
        setOutput((prevOutput) => prevOutput + e.target.value);
      } else {
        clearIOHandler();
        setCalculated(false);
        setInput((prevInput) =>
          prevInput === "0" ? e.target.value : prevInput + e.target.value
        );
        setOutput((prevOutput) => prevOutput + e.target.value);
      }
    } catch {
      setInput("ERROR");
    }
  };

  const operatorInputHandler = (e) => {
        if(calculated){
          setCalculated(false)
          setInput(prevInput => prevInput + e.target.value)
          setOutput(input + e.target.value)
          setDecimalSet(false)
        } else {
        setInput(e.target.value)
        setOutput(prevOutput => endsWithOperator.test(prevOutput) ? prevOutput.slice(0, -1) + e.target.value : prevOutput + e.target.value)
        setDecimalSet(false);
        }
      }

  const minusOperatorHandler = (e) => {
    if(input[input.length-1] !== "-" && input[input.length-2] !== "-"){
      setInput(e.target.value)
      setOutput(prevOutput => prevOutput += "-")
      setDecimalSet(false);
    }
  }


  const dotHandler = (e) => {
    if (!decimalSet) {
      setInput((prevInput) => prevInput + e.target.value);
      setOutput((prevOutput) => prevOutput + e.target.value);
      setDecimalSet(true);
    }
  };


  const deleteInputHandler = () => {
    try {
      setInput(prevInput => prevInput.slice(0, -1));
      setOutput(prevOutput => prevOutput.slice(0, -1))
    } catch {
      setInput("ERROR");
    }
  };

  const clearIOHandler = () => {
    setInput("0");
    setOutput("");
    setDecimalSet(false);
  };

  const calculateOutputHandler = (e) => {
    try {
      // eslint-disable-next-line
      setOutput(`${output}=${eval(output)}`);
      // eslint-disable-next-line
      setInput(eval(output));
      setCalculated(true);
      setDecimalSet(false);
    } catch {
      setInput("ERROR");
    }
  };
  const calcSqrt = () => {
    setInput(prevInput => Math.sqrt(prevInput));
    setOutput(input)
  };

  const calcExp = () => {
    setInput(output + input * output + input);
  };

  return (
    <StateContext.Provider
      value={{
        input: input,
        output: output,
        numberInput: numberInputHandler,
        delLastInput: deleteInputHandler,
        clearIO: clearIOHandler,
        calcOutput: calculateOutputHandler,
        calcSqrt: calcSqrt,
        calcExp: calcExp,
        dotHandler: dotHandler,
        operatorInput: operatorInputHandler,
        minusOperator: minusOperatorHandler,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export default StateProvider;
