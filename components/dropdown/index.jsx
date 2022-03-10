import Head from "next/head"
import Image from "next/image"
import { ChevronDownIcon } from "@heroicons/react/solid"
import clsx from "clsx"

function Dropdown(props) {
  return (
    <div className="flex w-full px-1 my-1 justify-between  ">
      <div className="flex flex-col ">
        <div className="text-gray-100 tracking-wide ">{props.label}</div>
        <div className="text-lg whitespace-nowrap">{props.value}</div>
      </div>
      {!props.disabled && (
        <button>
          <ChevronDownIcon className="h-8" />
        </button>
      )}
    </div>
  )
}

export { Dropdown }
