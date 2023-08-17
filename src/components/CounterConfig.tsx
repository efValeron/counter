import React from 'react';
import {SuperPuperButton} from "./SuperPuperButton";
import {SuperDuperInput} from "./SuperDuperInput";

type Props = {
  maxVal: number
  minVal: number
  setMaxVal: (val: number) => void
  setMinVal: (val: number) => void
  minAllowed: number
  setNewConfig: () => void
}

export const CounterConfig = (props: Props) => {

  return (
    <div className="border-8 border-cyan-500 rounded-md border-box p-8 flex flex-col gap-8 w-1/3">
      <div
        className="bg-cyan-500 border-box font-bold flex flex-col gap-4 justify-center rounded border-box p-6 cursor-default">
        <div className="flex flex-row justify-between gap-8">
          <h3 className="text-4xl">Max value:</h3>
          <SuperDuperInput type="number" callBack={props.setMaxVal} value={props.maxVal} error={props.maxVal <= props.minVal}/>
        </div>
        <div className="flex flex-row justify-between gap-8">
          <h3 className="text-4xl">Min value:</h3>
          <SuperDuperInput type="number" callBack={props.setMinVal} value={props.minVal} error={props.minVal < props.minAllowed}/>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-8 border-8 border-cyan-500 rounded-md border-box p-8">
        <SuperPuperButton title="set" active={props.minVal >= props.minAllowed && props.maxVal > props.minVal} callBack={props.setNewConfig}/>
      </div>
    </div>
  );
}
