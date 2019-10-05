import React from "react"
import { IWPGBlock } from "react-gutenberg/"

import ToggleableComponent from "../ToggleableComponent"
import ImageDialogGrid from "./imageDialogGrid"
import ZoomImageGrid from "./zoomImageGrid"

const ToggleImageGrid: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  // Get all Images
  const { controler, grid_style, content_style } = attrs as {
    controler: string
    grid_style: string
    content_style: boolean
  }

  // list of Image Properties
  const data = JSON.parse(decodeURI(controler))

  var createDialogImages = useToggleImage => {
    return (
      <ImageDialogGrid
        innerHTML={props.innerHTML}
        innerBlocks={props.innerBlocks}
        blockName={props.blockName}
        attrs={{
          grid_style: grid_style,
          controler: controler,
          is_toggle: useToggleImage,
        }}
      />
    )
  }

  var createZoomImages = useToggleImage => {
    return (
      <ZoomImageGrid
        innerHTML={props.innerHTML}
        innerBlocks={props.innerBlocks}
        blockName={props.blockName}
        attrs={{
          grid_style: grid_style,
          controler: controler,
          is_toggle: useToggleImage,
        }}
      />
    )
  }

  return (
    <div className="wpg-block">
      <ToggleableComponent
        title={""}
        mainComponent={
          <div>
            {content_style
              ? createDialogImages(false)
              : createZoomImages(false)}
          </div>
        }
        toggledComponent={
          <div>
            {content_style ? createDialogImages(true) : createZoomImages(true)}
          </div>
        }
        hideTitle={false}
        sizeClass={""}
      />
    </div>
  )
}

export default ToggleImageGrid
