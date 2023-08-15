import React, {useState} from 'react';
import './App.css';
import {SuperPuperButton} from "./SuperPuperButton";

function App() {
  const [count, setCount] = useState<number>(0)

  const resetHandler = () => {
    console.log("reset")
    setCount(0)
  }

  const incHandler = () => {
    console.log("inc")
    if (count < 5) setCount(count + 1)
  }

  return (
    <div className="App h-screen bg-gray-800 flex justify-center items-center text-gray-800">
      <div className="border-8 border-cyan-500 rounded-md border-box p-8 flex flex-col gap-8">

        <div className="bg-cyan-500 border-box font-bold flex justify-center rounded border-box p-6 cursor-default">
          <h1 className={`${count === 5 ? "text-red-600" : ""} text-8xl`}>{count}</h1>
        </div>

        <div className="flex flex-row gap-8 border-8 border-cyan-500 rounded-md border-box p-8">
          <SuperPuperButton title="inc" active={count < 5} callBack={incHandler}/>
          <SuperPuperButton title="reset" active={count > 0} callBack={resetHandler}/>
        </div>

      </div>
    </div>
  );
}

export default App;
