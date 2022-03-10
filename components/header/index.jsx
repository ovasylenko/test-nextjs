import Head from "next/head"
import Image from "next/image"
import styles from "./header.module.css"
import { MenuIcon, SearchIcon } from "@heroicons/react/solid"
import { Menu } from "./Menu"
import Logo from "../../assets/icons/logo.svg"

const leftMenu = [
  {
    title: "HOMES",
    active: true,
  },
  {
    title: "HOSTS",
    active: false,
  },
]

const rightMenu = [
  {
    title: "Need help?",
    active: false,
  },
  {
    title: "Login",
    active: false,
  },
]
function Header() {
  return (
    <div className="w-full flex border-b border-gray-0">
      <div className="py-6 px-7 flex  justify-center items-center  border-r border-gray-0">
        <MenuIcon className="h-8 w-8 text-gray-900" />
      </div>
      <div className="flex flex-grow">
        <div className="hidden lg:flex ">
          <Menu items={leftMenu} />
        </div>
        <div className="flex flex-grow justify-center items-center">
          <Image src={Logo} height={20} />
        </div>
        <div className="hidden lg:flex ">
          <Menu items={rightMenu} />
        </div>
      </div>
      <div className="py-6 px-8 flex  justify-center items-center border-l border-gray-0">
        <SearchIcon className="h-6 w-6 text-gray-900" />
      </div>
    </div>
  )
}

export { Header }
