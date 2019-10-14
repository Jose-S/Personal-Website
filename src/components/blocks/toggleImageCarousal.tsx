/**
 *  This File maps to lazyblock/toggle-image-carousel
 *  An even more dynamic type of carousel
 *  Passes data to a higher order component
 *  The higher-order componnet creates two toggleable carousels
 */

// ----------- IMPORT -----------

// Boiler
import React from "react"
import { IWPGBlock } from "react-gutenberg/"
// Component
import DynamicToggleCarousel from "../DynamicToggleCarousel"

const ToggleImageCarousal: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  const { controler } = attrs as {
    controler: string
  }

  // list of Image Properties
  const images = JSON.parse(decodeURI(controler))

  console.log(images)

  return (
    <div className="wpg-block">
      <DynamicToggleCarousel
        mainImages={images.map(img => img.display_image)}
        toggledImages={images.map(img => img.toggle_image)}
        innerHTML={props.innerHTML}
        innerBlocks={props.innerBlocks}
        blockName={props.blockName}
        titles={images.map(img => img.title)}
        captions={images.map(img => img.caption)}
        hideTitle={false}
      />
    </div>
  )
}

export default ToggleImageCarousal
