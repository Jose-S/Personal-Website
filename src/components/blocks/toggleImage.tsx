/**
 *  This File maps to lazyblock/toggle-image
 *  A Toggle Image is a toggleable component
 *  It takes in two lazy loaded images, a title,
 *  and a boolean deciding if title should be shown
 */

// ----------- IMPORT -----------

// Boiler
import React from "react"
import { IWPGBlock } from "react-gutenberg/"
// Components
import LazyZoomImage from "../LazyZoomImage"
import ToggleableComponent from "../ToggleableComponent"
// Styles
import styles from "../../styles/zoom-image.module.scss"

// ----------- CODE -----------

const ZoomImage: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

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

  // Convert all images to objects
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

  // Returns the main image to show
  var mainContent: JSX.Element = (
    <LazyZoomImage
      src={imgDisplay.url}
      placeholderSrc={imgLoading.url}
    ></LazyZoomImage>
  )

  // Returns the image to toggle to
  var toggleContent: JSX.Element = (
    <LazyZoomImage
      src={imgDisplaySecondary.url}
      placeholderSrc={imgLoadingSecondary.url}
    ></LazyZoomImage>
  )

  // Passed togleable components to a higher-order
  // Toggleable Component
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
