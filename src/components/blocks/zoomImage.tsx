/**
 *  This File maps to lazyblock/zoom-image
 *  Takes in an image to be lazy loaded and
 *  caption to include
 *
 */

// ----------- IMPORT -----------

// Boiler
import React from "react"
import { IWPGBlock } from "react-gutenberg/"
// Component
import LazyZoomImage from "../LazyZoomImage"
// Styles
import styles from "../../styles/zoom-image.module.scss"

// ----------- CODE -----------

const ZoomImage: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  const { loading_image, display_image, caption } = attrs as {
    loading_image: string
    display_image: string
    caption: string
  }

  const imgLoading =
    props.blockName !== "lazyblock/zoom-image"
      ? loading_image
      : JSON.parse(decodeURI(loading_image))

  const imgDisplay =
    props.blockName !== "lazyblock/zoom-image"
      ? display_image
      : JSON.parse(decodeURI(display_image))

  // Creates the caption using the images caption metadata
  // and queried (WP Provided) caption
  var createCaption = () => {
    if (caption) {
      return (
        <small className={styles.caption}>
          <strong>{imgDisplay.caption}</strong>
          {caption}
        </small>
      )
    }
  }

  return (
    <div className={styles.zoom_image_wrapper}>
      <LazyZoomImage
        src={imgDisplay.url}
        placeholderSrc={imgLoading.url}
      ></LazyZoomImage>

      {createCaption()}
    </div>
  )
}

export default ZoomImage
