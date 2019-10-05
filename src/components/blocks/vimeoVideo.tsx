import React from "react"
import { IWPGBlock } from "react-gutenberg/"
import VideoComponent from "../videoComponent"

const VimeoVideo: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  const { title, content_style } = attrs as {
    title: string
    content_style: boolean
  }

  var videoSrc: string = title
  var scrollAutoplay: boolean = content_style

  return <VideoComponent src={videoSrc} playOnScroll={scrollAutoplay} />
}

export default VimeoVideo
