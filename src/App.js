import React, { useState } from "react";
import Calculator from "./components/calculator";
import "./App.css";

function App() {
  const [calculators, setCalculators] = useState([
    { id: 0, number: 1 },
    { id: 1, number: 2 },
    { id: 2, number: 3 },
    { id: 3, number: 4 },
  ]);

  // The calculator object that calls this method, passes itself into the method. We can use indexOf() to find where it is in the array (its index).
  // We *could* just pass its id. But if we moved or deleted items in the array, then the ids and indexes in the array would no longer be in sync.
  const handleIncrease = (calculator) => {
    // Copies calculators to new array.
    const copy = [...calculators];

    // Determines where in calculators array this calculator is, and returns that index.
    const index = calculators.indexOf(calculator);

    // Same as writing copy[index] = calculators[c] in C#. We are just copying the index from one array to another.
    // We have to make a copy of the index and (even though we've already copied the array)
    // because otherwise whatever we set copy[index] to will also change calculators[index]. The indexes were passed by reference, not value.
    copy[index] = { ...calculator };
    copy[index].number++;

    // When setting the state, we pass the entire copied array. Not just the property we changed.
    setCalculators(() => copy);
  };

  // *** This is what the above function would look like if we used ids. It's a bit more readable. ***
  //  ** But we don't do this because id and index can go out of sync (as noted above). **
  // const handleIncrease = (id) => {
  //   const copy = [...calculators];
  //   const index = copy.indexOf(calculators[id]);
  //   copy[index] = { ...calculators[id] };
  //   copy[index].number++;
  //   setCalculators(() => copy);
  // };

  const handleDecrease = (calculator) => {
    const copy = [...calculators];
    const index = calculators.indexOf(calculator);
    copy[index] = { ...calculator };
    copy[index].number--;
    setCalculators(() => copy);
  };

  return (
    <div className="App">
      {/* React needs every item to have a key attribute. This is read-only and shouldn't be used by us.
          Instead. We give each object a reference to itself (calculator={calculator});
          When an object calls a function, it passes itself as a param and we use that to determine its index in the array to modify its data.*/}
      {calculators.map((calculator) => (
        <Calculator
          key={calculator.id}
          calculator={calculator}
          number={calculator.number}
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
        />
      ))}
    </div>
  );
}

export default App;
