import React from "react"
import { IWPGBlock } from "react-gutenberg/"
// import "../../styles/carousel-styles.scss"
import DynamicToggleCarousel from "../DynamicToggleCarousel"

const ToggleImageCarousal: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  console.log("ImageCarousal", props)
  // Text to rotate animate
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
