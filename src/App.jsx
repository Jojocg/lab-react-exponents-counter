import "./App.css";
import { useState } from "react";

import Counter from "./components/Counter";
import Exponent from "./components/Exponent";
/* import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix"; */

function App () {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  const exponentNumbers = [2, 3, 4, 5, 6];

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} decrement={decrement} increment={increment}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container"> {/* Maybe the key of each Exponent component could be: exponentNumbers.indexOf(num) */}
        {exponentNumbers.map(num => /* console.log(count) */ <Exponent key={num} baseNumber={count} exponent={num}/>)} 
        
        {/* <ExponentTwo count={count}/>
        <ExponentThree count={count}/>
        <ExponentFour count={count}/>
        <ExponentFive count={count}/>
        <ExponentSix count={count}/> */}
      </div>
    </div>
  );
}

export default App;
