import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {CounterConfig} from "./components/CounterConfig";

function App() {
  const [maxVal, setMaxVal] = useState<number>(5)
  const [minVal, setMinVal] = useState<number>(0)
  const [changingConfig, setChangingConfig] = useState<boolean>(false)
  const minAllowed = 0

  const setNewConfig = () => {
    console.log("setting")
    localStorage.setItem("config", JSON.stringify({maxVal, minVal}))
    setChangingConfig(false)
  }

  useEffect(() => {
    const storedConfig = localStorage.getItem("config")
    if (storedConfig) {
      const config = JSON.parse(storedConfig) as { maxVal: number, minVal: number }
      if (config) {
        setMaxVal(config.maxVal)
        setMinVal(config.minVal)
      }
    }
  }, [])

  return (
    <div className="App h-screen bg-gray-800 flex justify-evenly items-center text-gray-800">
      {
        changingConfig
          ? <CounterConfig maxVal={maxVal} minVal={minVal} setMaxVal={setMaxVal} setMinVal={setMinVal}
                           minAllowed={minAllowed} setNewConfig={setNewConfig}/>
          : <Counter setChangingConfig={setChangingConfig} minVal={minVal} maxVal={maxVal}/>
      }
    </div>
  );
}

export default App;
