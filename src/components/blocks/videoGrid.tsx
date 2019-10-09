import React from "react"
import { IWPGBlock } from "react-gutenberg/"
import styles from "../../styles/zoom-image.module.scss"
import HoverVideo from "../HoverVideo"

const VideoGrid: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props
  // The Controller contains a URI with data
  const { grid_style, controler, content_style } = attrs as {
    grid_style: string
    content_style: boolean
    controler: string
  }

  console.log("Create Image GRID", grid_style)

  // Decode UR Data to an array of objects
  const dialogImages = JSON.parse(decodeURI(controler))
  console.log("VIDE SOURCE", dialogImages)
  // Returns an array containing IconBulletContent elements
  var createVideoThumbs = () => {
    let col = []
    dialogImages.forEach((vid, index) => {
      col.push(
        <HoverVideo
          src={vid.url_source}
          placeholderSrc={vid.loading_image.url}
          hasDialog={content_style}
          title={vid.title}
          caption={vid.caption}
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
    <div className={`wpg-block ${styles[grid_style]}`}>
      {createVideoThumbs()}
    </div>
  )
}
export default VideoGrid
