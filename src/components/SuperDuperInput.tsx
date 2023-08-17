import React from 'react';

type Props = {
  type: string
  callBack: (val: number) => void
  value: number
  error: boolean
}

export const SuperDuperInput = (props: Props) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      props.callBack(JSON.parse(e.currentTarget.value))
    }
    catch {
      props.callBack(0)
    }
  }

  return (
    <input
      value={props.value}
      onChange={onChangeHandler}
      type={props.type}
      className={`${props.error ? "border-2 border-red-500 bg-red-200" : "border-0"} text-gray-800 border-box p-4 rounded-md`}/>
  )
}