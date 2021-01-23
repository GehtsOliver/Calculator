import React from "react";
import MyContext from "../HOC/StateContext";

const KeyPad = () => {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div className="Btn-Pad">
          <section className="Btn-Pad-Left">
            <button
              value="CE"
              className="Btn Ctrl"
              onClick={context.delLastInput}
            >
              CE
            </button>
            <button
              value="AC"
              className="Btn Ctrl"
              id="clear"
              onClick={context.clearIO}
            >
              AC
            </button>
            <button
              value="("
              className="Btn Ctrl"
              onClick={context.delLastInput}
            >
              (
            </button>
            <button value="x²" className="Btn Ctrl" onClick={context.calcExp}>
              x²
            </button>
            <button value="√" className="Btn Ctrl" onClick={context.calcSqrt}>
              √
            </button>
            <button
              value=")"
              className="Btn Ctrl"
              onClick={context.numberInput}
            >
              )
            </button>
            <button
              value="7"
              className="Btn Calc"
              id="seven"
              onClick={context.numberInput}
            >
              7
            </button>
            <button
              value="8"
              className="Btn Calc"
              id="eight"
              onClick={context.numberInput}
            >
              8
            </button>

            <button
              value="9"
              className="Btn Calc"
              id="nine"
              onClick={context.numberInput}
            >
              9
            </button>

            <button
              value="4"
              className="Btn Calc"
              id="four"
              onClick={context.numberInput}
            >
              4
            </button>

            <button
              value="5"
              className="Btn Calc"
              id="five"
              onClick={context.numberInput}
            >
              5
            </button>

            <button
              value="6"
              className="Btn Calc"
              id="six"
              onClick={context.numberInput}
            >
              6
            </button>

            <button
              value="1"
              className="Btn Calc"
              id="one"
              onClick={context.numberInput}
            >
              1
            </button>

            <button
              value="2"
              className="Btn Calc"
              id="two"
              onClick={context.numberInput}
            >
              2
            </button>

            <button
              value="3"
              className="Btn Calc"
              id="three"
              onClick={context.numberInput}
            >
              3
            </button>

            <button
              value="0"
              className="Btn Calc"
              id="zero"
              onClick={context.numberInput}
            >
              0
            </button>

            <button
              value="."
              className="Btn Calc"
              id="decimal"
              onClick={context.dotHandler}
            >
              .
            </button>

            <button value="%" className="Btn Calc" onClick={context.numberInput}>
              %
            </button>
          </section>
          

          <section className="Btn-Pad-Right">
            <button
              value="/"
              className="Btn Operator"
              id="divide"
              onClick={context.operatorInput}
              disabled={!context.input}
            >
              /
            </button>
            <button
              value="*"
              className="Btn Operator"
              id="multiply"
              onClick={context.operatorInput}
              disabled={!context.input}
            >
              *
            </button>
            <button
              value="-"
              className="Btn Operator"
              id="subtract"
              onClick={context.minusOperator}
              disabled={!context.input}
            >
              -
            </button>
            <button
              value="+"
              className="Btn Operator"
              id="add"
              onClick={context.operatorInput}
              disabled={!context.input}
            >
              +
            </button>
            <button
              value="="
              className="Btn Operator"
              id="equals"
              onClick={context.calcOutput}
              disabled={!context.input}
            >
              =
            </button>
          </section>
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default KeyPad;
