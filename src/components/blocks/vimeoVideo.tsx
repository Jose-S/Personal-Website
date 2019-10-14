/**
 *  This File maps to lazyblock/video
 *  Takes in a title (Video URL). Using title
 *  parameter to avoid adding more graphql queries
 *  Content Style decides if the video is played on scroll
 *  or controled by the user.
 *
 */

// ----------- IMPORT -----------

// Boiler
import React from "react"
import { IWPGBlock } from "react-gutenberg/"
// Component
import VideoComponent from "../videoComponent"

// ----------- CODE -----------

const VimeoVideo: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  const { title, content_style } = attrs as {
    title: string
    content_style: boolean
  }

  // Changes variables for easy reading
  var videoSrc: string = title
  var scrollAutoplay: boolean = content_style

  return <VideoComponent src={videoSrc} playOnScroll={scrollAutoplay} />
}

export default VimeoVideo
