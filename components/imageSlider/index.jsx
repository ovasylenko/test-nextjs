import React, { useState, useEffect } from "react"
import axios from "axios"
import styles from "./imageSlider.module.scss"

const URL = "https://run.mocky.io/v3/8dac4388-ce28-4406-95bb-91aec813168d"
function ImageSlider() {
  const [imageUrls, setImageUrls] = useState([])
  useEffect(() => {
    axios(URL).then(({ data: { imageUrls } }) => {
      setImageUrls(imageUrls)
    })
  }, [])

  const [currentImage, setCurrentImage] = React.useState(0)
  const refs = imageUrls.reduce((acc, val, i) => {
    acc[i] = React.createRef()
    return acc
  }, {})

  const scrollToImage = (i) => {
    setCurrentImage(i)

    refs[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    })
  }

  const totalImages = imageUrls.length

  const nextImage = () => {
    scrollToImage(currentImage >= totalImages - 1 ? 0 : currentImage + 1)
  }

  const previousImage = () => {
    scrollToImage(currentImage === 0 ? totalImages - 1 : currentImage - 1)
  }

  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center top-1/2"

  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? "◀" : "▶"}
      </span>
    </button>
  )

  if (imageUrls.length === 0) return "Loading..."
  return (
    <div className="w-full flex justify-center">
      <div className="p-12 flex justify-center w-full items-center">
        {" "}
        <div className="bg-white absolute h-1/5 bottom-0 w-full" />
        <div className="relative w-full">
          {" "}
          <div className="absolute top-1/2 right-1/2 xl:right-36">
            <div className="mb-12 -mr-6 h-12 w-12 flex rounded-full bg-white  items-center justify-center">
              {currentImage}/{imageUrls.length}
            </div>
          </div>
          <div className={styles.imageSlider}>
            {sliderControl(true)}
            {imageUrls.map((img, i) => (
              <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
                <img src={img} className="w-full object-contain" />
              </div>
            ))}
            {sliderControl()}
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  )
}

export { ImageSlider }
