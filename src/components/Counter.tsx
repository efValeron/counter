import React, {useEffect, useState} from 'react';
import {SuperPuperButton} from "./SuperPuperButton";

type Props = {
  setChangingConfig: (val: boolean) => void
  minVal: number
  maxVal: number
}

export const Counter = (props: Props) => {
  const [count, setCount] = useState<number>(0)

  const resetHandler = () => {
    console.log("reset")
    setCount(props.minVal)
  }
  const incHandler = () => {
    console.log("inc")
    if (count < props.maxVal) setCount(count + 1)
  }
  const changeConfigHandler = () => {
    props.setChangingConfig(true)
  }

  useEffect(() => {
    setCount(props.minVal)
  }, [props.minVal]);

  return (
    <div className="border-8 border-cyan-500 rounded-md border-box p-8 flex flex-col gap-8 w-1/3">

      <div className="bg-cyan-500 border-box font-bold flex justify-center rounded border-box p-6 cursor-default">
        <h2 className={`${count === props.maxVal ? "text-red-600" : ""} text-6xl`}>{count}</h2>
      </div>

      <div className="flex flex-row gap-8 justify-evenly border-8 border-cyan-500 rounded-md border-box p-8">
        <SuperPuperButton title="inc" active={count < props.maxVal} callBack={incHandler}/>
        <SuperPuperButton title="reset" active={count > props.minVal} callBack={resetHandler}/>
        <SuperPuperButton title="set" callBack={changeConfigHandler}/>
      </div>

    </div>
  );
}
