import Head from "next/head"
import Image from "next/image"
import styles from "./hotelPreview.module.css"
import { HotelPreviewHeader } from "./HotelPreviewHeader"
import { ImageSlider } from "../imageSlider"

function HotelPreview() {
  return (
    <div className="bg-pink flex flex-col flex-grow relative">
      <HotelPreviewHeader />
      <ImageSlider />{" "}
    </div>
  )
}

export { HotelPreview }
