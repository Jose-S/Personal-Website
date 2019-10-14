/**
 * This File maps to lazyblock/image-carousel WP block.
 * An Image Carousel is a highly dynamic and complex component
 * It contains
 *    - A list of images and captions to use
 *    - The selected item to initialize the carousel with (Used for updating it)
 *    - A function to call if the selected carousel item changes
 * defined grid style.
 *
 * TODO/BUGS:
 *    - On mobile, swiping images does not trigger on_change fucntion
 *    - If this component is passed into a toggle component, the
 *      toggled caraousels don't match.
 */

// ----------- IMPORT -----------

// Booiler
import React, { useState } from "react"
import { IWPGBlock } from "react-gutenberg/"
// Components
import ImageZoom from "react-medium-image-zoom/lib/ImageZoom"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
// Styles
import "../../styles/carousel-styles.scss"
import styles from "../../styles/carousel.module.scss"

// ----------- CODE -----------

const ImageCarousal: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  // captions is unused but left for future implementations
  const {
    controler,
    selected_item = 0,
    on_change = (current: number) => console.log(`Current Slide: ${current}`),
    captions = [],
  } = attrs as {
    controler: string
    selected_item: number
    on_change: Function
    captions: Array<String>
  }

  // Tracks the Current Slide (React Hook)
  const [currentSlide, setCurrentSlide] = useState(selected_item)

  var changeSlideIndexTo = (slideIndex: number) => {
    // If the given index is within bouund of the numbe rof slides
    if (slideIndex < numOfSlides && slideIndex >= 0) {
      setCurrentSlide(slideIndex)
      on_change(slideIndex)
    }
  }

  // Parse image List
  const imgList: Array<any> =
    props.blockName !== "lazyblock/image-carousel"
      ? controler
      : JSON.parse(decodeURI(controler)).map(img => img.display_image)

  const numOfSlides: number = imgList.length
  const increment: number = 100 / numOfSlides

  // Creates a list of zoom images fo the carousel
  var createZoomImages = () => {
    let slides = []
    imgList.forEach((img, index) =>
      slides.push(
        <Slide index={index}>
          <div>
            <ImageZoom
              key={index}
              image={{
                src: img.url,
                className: styles.carousel_image,
              }}
            />
            {/* LEFT IN CASE IF I NEED TO ADD CAPTIONS INSIDE OF THE CAROUSEL*/}
            {/* <p key={index} className="carousel_caption">
              {captions[index]}
            </p> */}
          </div>
        </Slide>
      )
    )
    return slides
  }

  // Creates a list of thumb images fo the carousel
  var createThumbImages = () => {
    let thumbs = []
    imgList.forEach((img, index) =>
      thumbs.push(
        <Slide index={index} className={styles.carousel_thumb}>
          {/* Div is used to wrap a frame and positioning the thumb carousel */}
          <div
            className={
              currentSlide == index
                ? styles.carousel_thumb_img_container_selected
                : styles.carousel_thumb_img_container
            }
            onClick={() => changeSlideIndexTo(index)}
          >
            <img
              key={index}
              src={img.url}
              className={
                currentSlide == index
                  ? styles.carousel_thumb_img_selected
                  : styles.carousel_thumb_img
              }
            />
          </div>
        </Slide>
      )
    )
    return thumbs
  }

  // Creates the arrow icon for moving through teh carousel
  // TODO: Change to icon Imports (Maybe)
  var createArrowIcon = (rotate: boolean) => {
    return (
      <svg className={styles.button_arrow} viewBox="0 0 100 100">
        <path
          d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
          transform={rotate ? "translate(100, 100) rotate(180)" : ""}
        ></path>
      </svg>
    )
  }

  // Creates carousel indicator
  // Animates a bar moving by changing its left offset
  // Width is based on the bars length divided by the number of slides
  var CarouselIndicator = () => {
    return (
      <div className={styles.dot_group_wrapper}>
        <div
          className={styles.dot_inner_wrapper}
          style={{
            left: `${currentSlide * increment}%`,
            width: `${increment}%`,
          }}
        ></div>
      </div>
    )
  }

  return (
    <div className={`wpg-block ${styles.carousel_container}`}>
      {/* THUMBS CAROUSEL */}
      <CarouselProvider
        naturalSlideWidth={20}
        naturalSlideHeight={21}
        orientation="vertical"
        totalSlides={imgList.length}
        // For Sizing the Component (Fixes Bug)
        visibleSlides={numOfSlides + 1}
        className={styles.carousel_thumbs_container}
        dragEnabled={false}
      >
        <Slider>{createThumbImages()}</Slider>
      </CarouselProvider>
      {/* ZOOM IMAGE MAIN CAROUSEL */}
      <CarouselProvider
        naturalSlideWidth={40}
        naturalSlideHeight={35}
        orientation="horizontal"
        totalSlides={imgList.length}
        currentSlide={currentSlide}
        className={styles.carousel_image_container}
        dragEnabled={false}
      >
        <Slider>{createZoomImages()}</Slider>

        {/* BUTTONS */}
        <ButtonBack
          className={styles.carousel_buttons_left}
          onClick={() => changeSlideIndexTo(currentSlide - 1)}
        >
          {createArrowIcon(false)}
        </ButtonBack>
        <ButtonNext
          className={styles.carousel_buttons_right}
          onClick={() => changeSlideIndexTo(currentSlide + 1)}
        >
          {createArrowIcon(true)}
        </ButtonNext>
        {/* INDICATOR DOTS */}
        {CarouselIndicator()}
      </CarouselProvider>
    </div>
  )
}

export default ImageCarousal
