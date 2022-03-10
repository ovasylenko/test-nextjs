import React, { useState } from "react"
import styles from "./imageSlider.module.scss"

function ImageSlider() {
  const imageUrls = [
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/f29f49dc-7999-48d9-8a5a-da4bcde126ef.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/154c3d97-c97d-4ac2-9b23-6cd456674a6a.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/88b7652a-dfd4-4f77-97db-bb8a16efce42.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/3d788c77-4f76-486b-9f27-b328d9cac3fc.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/590698cf-f430-4b8f-b496-cce90a2a5c86.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/b1363b78-4a74-46ef-9e14-6c8d748c4d4f.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/7902ae75-4c56-4bd4-a4b8-06360f48e23b.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/81b061ec-6800-4526-89ba-bb35aab6b0b6.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/8fbf5150-0e27-4faa-9abd-44db304791a0.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/9f5eb2fd-179e-4495-bee9-b8ba7602caab.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/29018179-4ff0-4a35-8671-73decbcef389.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/1c0b1a01-9ba2-48b5-84c2-40ce5060d1a0.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/ec57f3f1-d700-487b-af30-6f51acb4b5c9.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/164bc6da-17b4-4eab-8e96-a18bf171a1af.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/2c89fb2c-5d55-4ee9-81f7-e21f4c74cad5.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/6167133c-864e-4641-ac4a-55ed8ca514cb.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/710b55cc-0b27-48d4-affc-8fedc08b5c0e.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/0bc12822-5153-472b-97ff-1107037016ab.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/bb12528c-33ee-4605-bc01-fd7580f7f29a.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/30eba67d-0334-4101-8f57-ad19b25b5f88.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/5b6b9551-727d-4f49-80e2-e02ff949672a.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/9bb57a90-38b7-429d-b869-6435e9a33cb8.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/36d10179-718d-4f91-a35f-319ead8434ee.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/c44a2723-ff18-4056-944b-485a307c39cf.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/ea4f4d71-2b6a-412e-8420-ed83eacf733a.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/01411c15-9a28-4361-994c-23af866ea163.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/d63e59c2-ca62-4fd5-a997-4c6a4ef71686.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/25f2c545-c614-4848-973e-a5d8dafd50c1.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/24102874-7bd5-4190-9511-42c6bec4f81f.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/3845e371-855b-4cc0-b678-c1affe59dd5e.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/968bec76-9eeb-43e4-988c-8f73f7a6b274.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/964245e4-4688-40c8-9c47-3b1534577f19.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/8d14dcdd-460a-4c54-bd5d-18a116304f88.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/5cf82ff0-8070-4593-9166-695ab3996dff.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/b3b277c5-d386-48e3-83e6-02bd36992428.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/99d38632-b057-42a1-94e2-c28067e3bef2.jpg",
    "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/421681a1-9ee6-4100-a9e0-3c0a85ca5b93.jpg",
  ]

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
