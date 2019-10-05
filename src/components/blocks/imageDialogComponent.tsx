import React from "react"
import { IWPGBlock } from "react-gutenberg/"
import ImageDialog from "../ImageDialog"

const ImageDialogBlock: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  // Text to rotate animate
  const { title, caption, loading_image, display_image } = attrs as {
    title: string
    caption: string
    loading_image: string
    display_image: string
  }

  const imgLoading =
    props.blockName !== "lazyblock/image-dialog"
      ? loading_image
      : JSON.parse(decodeURI(loading_image))

  const imgDisplay =
    props.blockName !== "lazyblock/image-dialog"
      ? display_image
      : JSON.parse(decodeURI(display_image))

  return (
    <div style={{ width: "100%" }}>
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
