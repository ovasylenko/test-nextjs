import Head from "next/head"
import Image from "next/image"
import styles from "./header.module.css"
import { MenuIcon, SearchIcon } from "@heroicons/react/solid"
import clsx from "clsx"

function Menu(props) {
  return (
    <div className="w-full h-full flex mx-10">
      {props.items.map((it) => (
        <div
          key={it.title}
          className={clsx(
            "h-full flex justify-center items-center tracking-menu	 px-1 mx-2 lg:ml-4 lg:mr-6 mb-0 text-xs",
            {
              "border-b-yellow border-b-2": it.active,
            }
          )}
        >
          {it.title}
        </div>
      ))}
    </div>
  )
}

export { Menu }
