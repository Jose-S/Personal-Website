import React from "react"
import { IWPGBlock } from "react-gutenberg/"
import "react-lazy-load-image-component/src/effects/blur.css"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.css"
import styles from "../../styles/carousel.module.scss"
import ImageZoom from "react-medium-image-zoom/lib/ImageZoom"
import ZoomImage from "./zoomImage"
import LazyZoomImage from "../LazyZoomImage"

const ImageCarousal: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  console.log("ImageCarousal", props)
  // Text to rotate animate
  const {
    controler,
    selected_item = 0,
    on_change = current => console.log(current),
  } = attrs as {
    controler: string
    selected_item: number
    on_change: Function
  }

  const imgList = JSON.parse(decodeURI(controler))
  console.log("ImageCarousal", imgList)
  // Returns a typed component from react-typed component made by
  // ssbeefeater (https://www.npmjs.com/package/react-typed)

  var createZoomImages = () => {
    let col = []
    imgList.forEach((img, index) =>
      col.push(
        //   <img src={img.display_image.url}></img>
        <ImageZoom
          image={{
            src: img.display_image.url,
          }}
        />
      )
    )

    return col
  }

  return (
    <Carousel
      showThumbs={true}
      showStatus={false}
      className={styles.wrapper_container}
      onChange={on_change()}
      selectedItem={selected_item}
    >
      {createZoomImages()}
    </Carousel>
  )
}

export default ImageCarousal
