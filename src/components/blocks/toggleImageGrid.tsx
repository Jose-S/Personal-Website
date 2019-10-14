/**
 *  This File maps to lazyblock/toggleable-image-grid
 *  An even more dynamic type of grid
 *  Takes in a list of images to lazy load, the grid style, and
 *  content style. The content Style decided if the images
 *  are Zoom Images or Dialog Images. If content_style is true, then
 *  a grid of dialog images is created.
 *
 */

// ----------- IMPORT -----------

// Boiler
import React from "react"
import { IWPGBlock } from "react-gutenberg/"
// Components
import ToggleableComponent from "../ToggleableComponent"
import ImageDialogGrid from "./imageDialogGrid"
import ZoomImageGrid from "./zoomImageGrid"

// ----------- CODE -----------

const ToggleImageGrid: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  const { controler, grid_style, content_style } = attrs as {
    controler: string
    grid_style: string
    content_style: boolean
  }

  // Create a grid of images
  // Takes in the grid component used to create the grid
  // Takes in a boolean that decide if the grid
  // should contain toggled images
  var createImages = (
    TypeImageGrid: React.FunctionComponent<IWPGBlock>,
    useToggleImage: boolean
  ) => {
    return (
      <TypeImageGrid
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
        // TITLE ARE EMPTY: TODO: Add a title rule to the WP Block
        title={""}
        mainComponent={
          <div>
            {content_style
              ? createImages(ImageDialogGrid, false)
              : createImages(ZoomImageGrid, false)}
          </div>
        }
        toggledComponent={
          <div>
            {content_style
              ? createImages(ImageDialogGrid, true)
              : createImages(ZoomImageGrid, true)}
          </div>
        }
        hideTitle={false}
        sizeClass={""}
      />
    </div>
  )
}

export default ToggleImageGrid
