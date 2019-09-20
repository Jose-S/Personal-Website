import React from "react"
import { IWPGBlock } from "react-gutenberg/"
import styles from "../../styles/zoom-image.module.scss"
import ZoomImage from "./zoomImage"

const ZoomImageGrid: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props
  // The Controller contains a URI with data
  const { grid_style, controler } = attrs as {
    grid_style: string
    controler: string
  }

  // Decode UR Data to an array of objects
  const zoomImages = JSON.parse(decodeURI(controler))

  // Returns an array containing IconBulletContent elements
  var createZoomImages = () => {
    let col = []
    zoomImages.forEach((zoomImg, index) =>
      col.push(
        <ZoomImage
          innerHTML={props.innerHTML}
          innerBlocks={props.innerBlocks}
          blockName={props.blockName}
          attrs={zoomImg}
          key={index}
        />
      )
    )

    return col
  }

  return (
    <div className={`wpg-block, ${styles[grid_style]}`}>
      {createZoomImages()}
    </div>
  )
}

// function getGridType(choice: string) {
//   switch (type) {
//     case "TwoTwo":
//       return styles.image_grid_two_one
//     case "TwoOne":
//       return styles.image_grid_two_one
//     case "TwoThree":
//       return styles.image_grid_two_one
//     default:
//       return styles.image_grid_two_one
//   }
// }
export default ZoomImageGrid
