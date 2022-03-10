import Head from "next/head"
import Image from "next/image"
import {
  LocationMarkerIcon,
  SwitchHorizontalIcon,
  GlobeIcon,
} from "@heroicons/react/solid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const details = [
  "4 people",
  "2 bedrooms",
  "2 bathrooms",
  "Private terrase",
  "Peaceful",
]

function HotelPreviewHeader() {
  return (
    <div className="bg-pink w-full mt-20 flex flex-col flex-grow items-center ">
      <h1 className="text-2xl lg:text-7xl lg:w-1/2 text-center font-bold">
        Monsieur Didot
      </h1>
      <div className="flex lg:flex-row flex-col mt-4">
        {details.map((it) => (
          <div key={it} className="mx-4 text-lg">
            {it}
          </div>
        ))}
      </div>
      <div className="flex lg:flex-row flex-col mt-6  justify-between lg:border-y lg:border-y-gray-100 py-2">
        <div className="flex items-center lg:justify-center px-6">
          {" "}
          <LocationMarkerIcon className="h-8" /> Notthing Hill, London
        </div>
        <div className="flex items-center lg:justify-center px-6 lg:border-x lg:border-x-gray-100">
          <GlobeIcon className="h-8" /> Walk 6 mins
        </div>
        <div className="flex items-center lg:justify-center px-6">
          {" "}
          <FontAwesomeIcon icon="fa-regular fa-stairs" />
          Stairs
        </div>
      </div>
    </div>
  )
}

export { HotelPreviewHeader }
