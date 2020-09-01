import React from "react";

// If no arguments, pass as reference
// {props.onDecrease}
// If arguments, pass as an arrow function
// {() => props.onIncrease{props.id}}
function Calculator(props) {
  return (
    <div className="Calculator CalcBGColor">
      <span className="CalcBGColor">
        <button
          onClick={() => props.onDecrease(props.id)}
          className="btn btn-info btn-sm m-2"
        >
          Minus
        </button>
        {props.number}
        <button
          onClick={() => props.onIncrease(props.id)}
          className="btn btn-info btn-sm m-2"
        >
          Plus
        </button>
      </span>
    </div>
  );
}

export default Calculator;
