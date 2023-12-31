import React from 'react'

type Props = {
  title: string
  callBack: () => void
  active?: boolean
};

export const SuperPuperButton = (props: Props) => {
  const { title, callBack, active = true } = props

  const clickHandler = () => {
    if (active) callBack()
  }

  return (
    <button
      onClick={clickHandler}
      className={`${active ? "bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700" : "bg-cyan-800 cursor-default"} text-gray-800 border-box p-4 rounded-md duration-100`}
    >
      <h3 className="text-5xl font-bold">{title}</h3>
    </button>
  )
}
