import React, { useState } from "react"
import ReactDOM from "react-dom"
import { IWPGBlock } from "react-gutenberg/"
// import "../../styles/carousel-styles.scss"
// import styles from "../../styles/carousel.module.scss"
import ImageZoom from "react-medium-image-zoom/lib/ImageZoom"
import "../../styles/carousel-styles.scss"
import styles from "../../styles/carousel.module.scss"

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"

const ImageCarousal: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  console.log("ImageCarousal", attrs)
  // Text to rotate animate
  const {
    controler,
    selected_item = 0,
    on_change = current => console.log(current),
    captions = [],
  } = attrs as {
    controler: string
    selected_item: number
    on_change: Function
    captions: Array<String>
  }

  const [currentSlide, setCurrentSlide] = useState(selected_item)

  var changeSlideIndexTo = slideIndex => {
    console.log("IMAGE DIV", slideIndex)

    if (slideIndex < numOfSlides && slideIndex >= 0) {
      setCurrentSlide(slideIndex)
      on_change(slideIndex)
    }
  }

  const imgList =
    props.blockName !== "lazyblock/image-carousel"
      ? controler
      : JSON.parse(decodeURI(controler)).map(img => img.display_image)

  const numOfSlides = imgList.length
  const increment = 100 / numOfSlides
  // Returns a typed component from react-typed component made by
  // ssbeefeater (https://www.npmjs.com/package/react-typed)

  var createZoomImages = () => {
    let col = []
    imgList.forEach((img, index) =>
      col.push(
        //   <img src={img.display_image.url}></img>
        <Slide index={index}>
          <div>
            <ImageZoom
              key={index}
              image={{
                src: img.url,
                style: { width: "100%" },
              }}
            />
            {/* <p key={index} className="carousel_caption">
              {captions[index]}
            </p> */}
          </div>
        </Slide>
      )
    )

    return col
  }

  var createThumbImages = () => {
    let col = []
    imgList.forEach((img, index) =>
      col.push(
        <Slide index={index} className={styles.carousel_thumb}>
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

    return col
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      <CarouselProvider
        naturalSlideWidth={20}
        naturalSlideHeight={21}
        orientation="vertical"
        totalSlides={imgList.length}
        // currentSlide={currentSlide}
        visibleSlides={numOfSlides + 1}
        className={styles.carousel_thumbs_container}
        dragEnabled={false}
      >
        <Slider>{createThumbImages()}</Slider>
      </CarouselProvider>
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

        {/* SIMPLE ARROW SVG: I Didn't want to import a new file so I just addedthe svg path inline*/}
        <ButtonBack
          className={styles.carousel_buttons_left}
          onClick={() => changeSlideIndexTo(currentSlide - 1)}
        >
          <svg className={styles.button_arrow} viewBox="0 0 100 100">
            <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path>
          </svg>
        </ButtonBack>
        <ButtonNext
          className={styles.carousel_buttons_right}
          onClick={() => changeSlideIndexTo(currentSlide + 1)}
        >
          <svg className={styles.button_arrow} viewBox="0 0 100 100">
            <path
              d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
              transform="translate(100, 100) rotate(180)"
            ></path>
          </svg>
        </ButtonNext>
        <div className={styles.dot_group_wrapper}>
          <div
            className={styles.dot_inner_wrapper}
            style={{
              left: `${currentSlide * increment}%`,
              width: `${increment}%`,
            }}
          ></div>
        </div>
      </CarouselProvider>
    </div>

    // <Carousel
    //   showThumbs={true}
    //   showStatus={false}
    //   className={styles.wrapper_container}
    //   onChange={current => on_change(current)}
    //   selectedItem={selected_item}
    // >
    //   {createZoomImages()}
    // </Carousel>
  )
}

export default ImageCarousal
