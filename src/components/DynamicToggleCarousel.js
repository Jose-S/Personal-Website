/**
 * This component is a higher order component that
 * takes in two carousels for toggleing. This uses a
 * class component becuase it needs to bind the state,
 * so its modifiable by its children components.
 */

// ----------- IMPORT -----------

// Build
import React, { Component } from "react"
import ImageCarousal from "./blocks/imageCarousal"
// Component
import ToggleableComponent from "./ToggleableComponent"
// Styles
import styles from "../styles/carousel.module.scss"

// ----------- CODE -----------

class DynamicToggleCarousel extends Component {
  constructor(props) {
    super(props)
    // Bind this to changePosition function
    // This allows any child components to update this parent's state
    // by simply calling change posiiton
    this.changePosition = this.changePosition.bind(this)
  }

  static defaultProperties = {
    hideTitle: false,
  }

  state = {
    // Position of carousel slide
    currentPosition: 0,
  }

  // Function that sets the slide position. It is passed to
  // the ImageCarousel component
  changePosition(current) {
    this.setState({ currentPosition: current })
  }

  // Creates an Image Carousel Component
  createCarousalComponent(imageControler, caption, currentIndex) {
    return (
      <ImageCarousal
        innerHTML={this.innerHTML}
        innerBlocks={this.innerBlocks}
        blockName={this.blockName}
        attrs={{
          controler: imageControler,
          selected_item: currentIndex,
          on_change: this.changePosition,
          captions: caption,
        }}
      ></ImageCarousal>
    )
  }

  // Creates carousel titles
  createTitles(titles) {
    let titleGroup = []
    titles.forEach((title, index) => {
      titleGroup.push(
        <h4
          key={index}
          // Only show the title if it's index is
          // equal to the current position
          className={`${styles.title_toggle} ${
            index === this.state.currentPosition
              ? styles.fadeIn
              : styles.fadeOut
          }`}
        >
          {title}
        </h4>
      )
    })
    return titleGroup
  }

  // Creates carousel image tites
  createCaptions(captions) {
    let captionGroup = []
    // Find Largest length index
    // Used to set to relative position
    let largestI = 0
    captions.forEach((c, i) => {
      if (c.length > captions[largestI].length) {
        largestI = i
      }
    })

    captions.forEach((caption, index) => {
      captionGroup.push(
        <p
          key={index}
          className={
            index === this.state.currentPosition
              ? styles.fadeIn
              : styles.fadeOut
          }
          style={{
            top: "0",
            position: `${index === largestI ? "relative" : "absolute"}`,
          }}
        >
          {caption}
        </p>
      )
    })
    return captionGroup
  }

  render() {
    const {
      mainImages,
      toggledImages,
      titles,
      captions,
      hideTitle,
    } = this.props

    return (
      <div>
        <div className={styles.stack_wrapper}>{this.createTitles(titles)}</div>

        <ToggleableComponent
          title={""}
          mainComponent={this.createCarousalComponent(
            mainImages,
            captions,
            this.state.currentPosition
          )}
          toggledComponent={this.createCarousalComponent(
            toggledImages,
            captions,
            this.state.currentPosition
          )}
          hideTitle={hideTitle}
          sizeClass={""}
        />
        {/* DEVELOP BUG: WHEN THE SITE IS LOADED THE ABSOLUTE 
        DIVS CONTAINING THE IMAGE'S CAPTION FLICKER (WORKS ON BUILD VERSION)
        CURRENTLY NOT AN URGENT FIX*/}
        <div className={styles.stack_wrapper}>
          {this.createCaptions(captions)}
        </div>
      </div>
    )
  }
}
export default DynamicToggleCarousel
