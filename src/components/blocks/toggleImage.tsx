import React from "react"
import { IWPGBlock } from "react-gutenberg/"
import "react-lazy-load-image-component/src/effects/blur.css"
import styles from "../../styles/zoom-image.module.scss"
import LazyZoomImage from "../LazyZoomImage"
import ToggleableComponent from "../ToggleableComponent"

const ZoomImage: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  // Text to rotate animate
  const {
    title,
    loading_image,
    display_image,
    loading_image_secondary,
    display_image_secondary,
    content_style,
  } = attrs as {
    title: string
    loading_image: string
    display_image: string
    loading_image_secondary: string
    display_image_secondary: string
    content_style: boolean
  }

  const imgLoading =
    props.blockName === "lazyblock/zoom-image-grid"
      ? loading_image
      : JSON.parse(decodeURI(loading_image))

  const imgDisplay =
    props.blockName === "lazyblock/zoom-image-grid"
      ? display_image
      : JSON.parse(decodeURI(display_image))

  const imgLoadingSecondary =
    props.blockName === "lazyblock/zoom-image-grid"
      ? loading_image
      : JSON.parse(decodeURI(loading_image_secondary))

  const imgDisplaySecondary =
    props.blockName === "lazyblock/zoom-image-grid"
      ? display_image
      : JSON.parse(decodeURI(display_image_secondary))

  // Returns a typed component from react-typed component made by
  // ssbeefeater (https://www.npmjs.com/package/react-typed)

  var mainContent = (
    <LazyZoomImage
      src={imgDisplay.url}
      placeholderSrc={imgLoading.url}
      srcClassName={styles.displayImage_full}
      placeholderClassName={styles.placeholder_full}
    ></LazyZoomImage>
  )

  var toggleContent = (
    <LazyZoomImage
      src={imgDisplaySecondary.url}
      placeholderSrc={imgLoadingSecondary.url}
      srcClassName={styles.displayImage_full}
      placeholderClassName={styles.placeholder_full}
    ></LazyZoomImage>
  )

  return (
    <div className="wpg-block">
      <ToggleableComponent
        title={title}
        mainComponent={mainContent}
        toggledComponent={toggleContent}
        hideTitle={content_style}
        sizeClass={styles.displayImage_full}
      />
    </div>
  )
}

export default ZoomImage
