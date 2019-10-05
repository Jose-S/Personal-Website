import React from "react"
import { IWPGBlock } from "react-gutenberg/"
import "react-lazy-load-image-component/src/effects/blur.css"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.css"
import styles from "../../styles/carousel.module.scss"
import ImageZoom from "react-medium-image-zoom/lib/ImageZoom"

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

  console.log("FUNC", on_change)

  const imgList =
    props.blockName !== "lazyblock/image-carousel"
      ? controler
      : JSON.parse(decodeURI(controler)).map(img => img.display_image)

  console.log("ImageCarousal", imgList)
  // Returns a typed component from react-typed component made by
  // ssbeefeater (https://www.npmjs.com/package/react-typed)

  var createZoomImages = () => {
    let col = []
    imgList.forEach((img, index) =>
      col.push(
        //   <img src={img.display_image.url}></img>
        <ImageZoom
          key={index}
          image={{
            src: img.url,
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
      onChange={current => on_change(current)}
      selectedItem={selected_item}
    >
      {createZoomImages()}
    </Carousel>
  )
}

export default ImageCarousal
