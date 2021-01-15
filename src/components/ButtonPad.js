import React from "react";
import Button from "./Button";

const ButtonPad = (props) => {
  return (
    <div className="Btn-Pad">
      <section className="Btn-Pad-Left">
        <Button>C</Button>
        <Button>AC</Button>
        <Button>1</Button>
        <Button>1</Button>
        <Button>1</Button>
        <Button>1</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>0</Button>
        <Button>0</Button>
        <Button>0</Button>
      </section>
      <section className="Btn-Pad-Right">
        <Button>%</Button>
        <Button>X</Button>
        <Button>-</Button>
        <Button>+</Button>
        <Button>=</Button>
      </section>
    </div>
  );
};

export default ButtonPad;
