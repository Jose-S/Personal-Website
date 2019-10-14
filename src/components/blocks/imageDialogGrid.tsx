/**
 *  This File maps to lazyblock/image-dialog-grid WP block.
 *  An image dialog contains a lazy loaded image and caption
 *  The image is clickable and shows a dialog for more details
 */

// ----------- IMPORT -----------

// Boiler
import React from "react"
import { IWPGBlock } from "react-gutenberg/"
// Component
import ImageDialogBlock from "./imageDialogComponent"
// Styles
import styles from "../../styles/zoom-image.module.scss"

// ----------- CODE -----------

const ImageDialogGrid: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props
  // The Controller contains a URI with data
  const { grid_style, controler, is_toggle = false } = attrs as {
    grid_style: string
    controler: string
    is_toggle: boolean
  }

  // Decode UR Data to an array of objects
  const dialogImages: Array<any> = JSON.parse(decodeURI(controler))

  // Returns an array containing Dialog Images elements
  var createDialogImages = () => {
    let images = []
    dialogImages.forEach((img, index) => {
      // If image is toggle mutate img display to equal to image toggle
      if (is_toggle) {
        img.display_image = img.toggle_image
      }

      images.push(
        <ImageDialogBlock
          innerHTML={props.innerHTML}
          innerBlocks={props.innerBlocks}
          blockName={props.blockName}
          attrs={img}
          key={index}
        />
      )
    })

    return images
  }

  // Top margin is only added if the bloc is not rendered internally
  // Ex: Inside of a toggle. This fixes a bug where the toggled coponent is slightly
  // placed below the main component
  return (
    <div
      className={`wpg-block ${styles[grid_style]} 
      ${
        props.blockName === "lazyblock/image-dialog-grid"
          ? styles.grid_top_margin
          : ""
      }
      `}
    >
      {createDialogImages()}
    </div>
  )
}

export default ImageDialogGrid
