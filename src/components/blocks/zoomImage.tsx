import React from "react"
import { IWPGBlock } from "react-gutenberg/"
import "react-lazy-load-image-component/src/effects/blur.css"
import styles from "../../styles/zoom-image.module.scss"
import LazyZoomImage from "../LazyZoomImage"

const ZoomImage: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  // Text to rotate animate
  const { caption, loading_image, display_image } = attrs as {
    caption: string
    loading_image: string
    display_image: string
  }

  console.log("HAS IT CRASHED")
  const imgLoading =
    props.blockName !== "lazyblock/zoom-image"
      ? loading_image
      : JSON.parse(decodeURI(loading_image))
  console.log("HAS IT CRASHED", imgLoading)
  const imgDisplay =
    props.blockName !== "lazyblock/zoom-image"
      ? display_image
      : JSON.parse(decodeURI(display_image))

  // Returns a typed component from react-typed component made by
  // ssbeefeater (https://www.npmjs.com/package/react-typed)

  return (
    <div className={styles.zoom_image_wrapper}>
      <LazyZoomImage
        src={imgDisplay.url}
        placeholderSrc={imgLoading.url}
        srcClassName={styles.displayImage_full}
        placeholderClassName={styles.placeholder}
      ></LazyZoomImage>
      <small className={styles.caption}>{caption}</small>
    </div>
  )
}

export default ZoomImage
