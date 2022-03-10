import Head from "next/head"
import Image from "next/image"
import styles from "./searchBar.module.css"
import { Dropdown } from "../dropdown"

function SearchBar() {
  return (
    <div className="mx-12 my-10 flex-col flex lg:flex-row justify-between">
      <div className=" w-full lg:px-4 ">
        <Dropdown label="From / To" value="3 Jan 2020 - 28 Feb 2022" />
      </div>
      <div className="lg:border-l w-full lg:px-4 lg:border-l-gray-0">
        <Dropdown label="For" value="2 Guests" />
      </div>{" "}
      <div className="lg:border-l w-full lg:px-4 lg:border-l-gray-0">
        <Dropdown label="$ Per Night" value="345" disabled />
      </div>{" "}
      <div className="lg:border-l w-full lg:px-4 lg:border-l-gray-0">
        <Dropdown label="Total for 54 nights" value="18,630" disabled />
      </div>{" "}
      <div className=" w-full lg:px-4 my-1">
        <button className="bg-yellow py-4 w-full  text-xs uppercase tracking-menu">
          Instant booking
        </button>
      </div>
    </div>
  )
}

export { SearchBar }
