import React, { Component } from "react"
import ImageCarousal from "./blocks/imageCarousal"
import ToggleableComponent from "./ToggleableComponent"
// import "../styles/carousel-styles.scss"
import styles from "../styles/carousel.module.scss"

class DynamicToggleCarousel extends Component {
  constructor(props) {
    super(props)
    // Bind this to changePosition function
    // THis allows any child components to update this parent's state
    // by simply calling change posiiton
    this.changePosition = this.changePosition.bind(this)
  }

  static defaultProperties = {
    hideTitle: false,
  }

  state = {
    currentPosition: 0,
    rebuilds: 0,
  }

  changePosition(current) {
    this.setState({ currentPosition: current })
    //  this.setState({ rebuilds: rebuilds++ })
    console.log("Building a New Component: ")
  }

  createCarousalComponent(imageControler, caption) {
    console.log("CAROUSEL CAPTIONS", caption)
    return (
      <ImageCarousal
        innerHTML={this.innerHTML}
        innerBlocks={this.innerBlocks}
        blockName={this.blockName}
        attrs={{
          controler: imageControler,
          selected_item: this.state.currentPosition,
          on_change: this.changePosition,
          captions: caption,
        }}
      ></ImageCarousal>
    )
  }

  createTitles(titles) {
    let group = []
    titles.forEach((title, index) => {
      group.push(
        <h4
          key={index}
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
    return group
  }

  createCaptions(captions) {
    let group = []
    // Find Largest length index
    // Used to set to relative position
    let largestI = 0
    captions.forEach((c, i) => {
      if (c.length > captions[largestI].length) {
        largestI = i
      }
    })

    captions.forEach((caption, index) => {
      group.push(
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
    return group
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
          mainComponent={this.createCarousalComponent(mainImages, captions)}
          toggledComponent={this.createCarousalComponent(
            toggledImages,
            captions
          )}
          hideTitle={hideTitle}
          sizeClass={""}
        />
        {/* DEVELOP BUG: WHEN THE SITE IS LOADED THE ABSOLUTE 
        DIVS CONTAINING THE IMAGE'S CAPTION FLICKER (WORKS ON BUILD VERSION)*/}
        <div className={styles.stack_wrapper}>
          {this.createCaptions(captions)}
        </div>
      </div>
    )
  }
}
export default DynamicToggleCarousel
