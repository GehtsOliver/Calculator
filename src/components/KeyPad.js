import React from "react";
import MyContext from "../HOC/MyContext";
import Button from "./Button";

const KeyPad = () => {
  return (
    <MyContext.Consumer>
      {context => (
    <div className="Btn-Pad">
      <section className="Btn-Pad-Left">
        <Button delLastInput={context.delLastInput}>CE</Button>
        <Button delAllInput={context.delAllInput}>AC</Button>
        <Button inputHandler={context.changeInput}>(</Button>
        <Button inputHandler={context.calcExp}>x²</Button>
        <Button inputHandler={context.calcSqrt}>√</Button>
        <Button inputHandler={context.changeInput}>)</Button>
        <Button inputHandler={context.changeInput}>7</Button>
        <Button inputHandler={context.changeInput}>8</Button>
        <Button inputHandler={context.changeInput}>9</Button>
        <Button inputHandler={context.changeInput}>4</Button>
        <Button inputHandler={context.changeInput}>5</Button>
        <Button inputHandler={context.changeInput}>6</Button>
        <Button inputHandler={context.changeInput}>1</Button>
        <Button inputHandler={context.changeInput}>2</Button>
        <Button inputHandler={context.changeInput}>3</Button>
        <Button inputHandler={context.changeInput}>0</Button>
        <Button inputHandler={context.changeInput}>.</Button>
        <Button inputHandler={context.changeInput}>(-)</Button>
      </section>
      <section className="Btn-Pad-Right">
        <Button inputHandler={context.changeInput}> % </Button>
        <Button inputHandler={context.changeInput}> / </Button>
        <Button inputHandler={context.changeInput}> * </Button>
        <Button inputHandler={context.changeInput}> - </Button>
        <Button inputHandler={context.changeInput}> + </Button>
        <Button calcOutput={context.calcOutput}> = </Button>
      </section>
    </div>
    )}
    </MyContext.Consumer>
  );
};

export default KeyPad;
