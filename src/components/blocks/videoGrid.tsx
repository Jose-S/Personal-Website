/**
 *  This File maps to lazyblock/video-grid
 *  Takes in a list of video link (From vimeo)
 *  A grid style and content style. The content style
 *  decides if the video has a dialog.
 *
 */

// ----------- IMPORT -----------

// Boiler
import React from "react"
import { IWPGBlock } from "react-gutenberg/"
// Components
import HoverVideo from "../HoverVideo"
// Styles
import styles from "../../styles/zoom-image.module.scss"

const VideoGrid: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  const { controler, content_style, grid_style } = attrs as {
    grid_style: string
    content_style: boolean
    controler: string
  }

  const videoLinks = JSON.parse(decodeURI(controler))

  // Returns an array containing Video links, caption and title
  var createVideoThumbs = () => {
    let videos = []
    videoLinks.forEach((vid, index) => {
      videos.push(
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

    return videos
  }

  return (
    <div className={`wpg-block ${styles[grid_style]}`}>
      {createVideoThumbs()}
    </div>
  )
}
export default VideoGrid
