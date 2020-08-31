import React, { useState } from "react";
import Calculator from "./components/calculator";
import "./App.css";

function App() {
  //const [calculators, setCalculators] = useState([1, 2]);
  const [calculators, setCalculators] = useState([
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 },
    { id: 4, number: 4 },
  ]);

  const [number, setNumber] = useState(0);

  // Have to assign function to a const because this is not in a class (I think).
  // TODO: Calculator below the button you click on will change. Need to look at this code to figure out why.
  const handleIncrease = (id) => {
    const copy = [...calculators];
    const index = copy.indexOf(calculators[id]);
    copy[index] = { ...calculators };
    copy[index].number = 22;

    // Either just sending copy or using an arrow function both give the same results.
    //setCalculators(() => copy);
    setCalculators(copy);
  };

  const handleDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
    console.log("decrease");
  };

  return (
    <div className="App">
      {calculators.map((calculator) => (
        <Calculator
          key={calculator.id}
          id={calculator.id}
          number={calculator.number}
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
        />
      ))}
    </div>
  );
}

export default App;
