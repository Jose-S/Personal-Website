/**
 *  This File maps to lazyblock/zoom-image-grid
 *  An image dialog contains a lazy loaded image and caption
 *  The image is zoomabale (medium style)
 *  is_toggle determines which image to laod from the controler
 */

// ----------- IMPORT -----------

// Boiler
import React from "react"
import { IWPGBlock } from "react-gutenberg/"
// Components
import ZoomImage from "./zoomImage"
// Styles
import styles from "../../styles/zoom-image.module.scss"

const ZoomImageGrid: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  const { grid_style, controler, is_toggle = false } = attrs as {
    grid_style: string
    controler: string
    is_toggle: boolean
  }

  const zoomImages = JSON.parse(decodeURI(controler))

  // Returns an array containing Zoom Image elements
  var createZoomImages = () => {
    let images = []
    zoomImages.forEach((zoomImg, index) => {
      // Mutate Display Image to point to Toggle Image
      if (is_toggle) {
        zoomImg.display_image = zoomImg.toggle_image
      }
      images.push(
        <ZoomImage
          innerHTML={props.innerHTML}
          innerBlocks={props.innerBlocks}
          blockName={props.blockName}
          attrs={zoomImg}
          key={index}
        />
      )
    })

    return images
  }

  return (
    <div className={`wpg-block ${styles[grid_style]}`}>
      {createZoomImages()}
    </div>
  )
}

export default ZoomImageGrid
