import React from "react"
import { IWPGBlock } from "react-gutenberg/"
import styles from "../../styles/zoom-image.module.scss"
import ImageDialogBlock from "./imageDialogComponent"

const ImageDialogGrid: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props
  // The Controller contains a URI with data
  const { grid_style, controler, is_toggle = false } = attrs as {
    grid_style: string
    controler: string
    is_toggle: boolean
  }

  console.log("Create Image GRID", grid_style)
  // Decode UR Data to an array of objects
  const dialogImages = JSON.parse(decodeURI(controler))

  // Returns an array containing IconBulletContent elements
  var createDialogImages = () => {
    let col = []
    dialogImages.forEach((img, index) => {
      // If image is toggle mutate img display to equal to image toggle
      if (is_toggle) {
        img.display_image = img.toggle_image
      }

      col.push(
        <ImageDialogBlock
          innerHTML={props.innerHTML}
          innerBlocks={props.innerBlocks}
          blockName={props.blockName}
          attrs={img}
          key={index}
        />
      )
    })

    return col
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
