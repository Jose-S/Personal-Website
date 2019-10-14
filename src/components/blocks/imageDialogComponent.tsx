/**
 *  This File maps to lazyblock/image-dialog WP block.
 *  An image dialog contains a lazy loaded image and caption
 *  The image is clickable and shows a dialog for more details
 */

// ----------- IMPORT -----------

// Boiler
import React from "react"
import { IWPGBlock } from "react-gutenberg/"
// Component
import ImageDialog from "../ImageDialog"

// ----------- CODE -----------

const ImageDialogBlock: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  const { title, caption, loading_image, display_image } = attrs as {
    title: string
    caption: string
    loading_image: string
    display_image: string
  }

  // Requires two images for lazy loading
  const imgLoading =
    props.blockName !== "lazyblock/image-dialog"
      ? loading_image
      : JSON.parse(decodeURI(loading_image))

  const imgDisplay =
    props.blockName !== "lazyblock/image-dialog"
      ? display_image
      : JSON.parse(decodeURI(display_image))

  return (
    // Don't want to add an extra css file for this one style attribute
    <div className="wpg-block" style={{ width: "100%" }}>
      <ImageDialog
        src={imgDisplay.url}
        placeholderSrc={imgLoading.url}
        title={title}
        caption={caption}
      />
    </div>
  )
}

export default ImageDialogBlock
