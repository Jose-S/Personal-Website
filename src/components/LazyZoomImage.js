import React from "react"
import { LazyLoadComponent } from "react-lazy-load-image-component"
import ImageZoom from "react-medium-image-zoom"
import "react-lazy-load-image-component/src/effects/blur.css"

const LazyZoomImage = ({
  src,
  placeholderSrc,
  srcClassName,
  placeholderClassName,
}) => {
  // Create a Placeholder Div
  var ph = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${placeholderSrc})`,
        }}
        className={placeholderClassName}
      ></div>
    )
  }

  // Lazy loads an image zoom component
  return (
    <LazyLoadComponent placeholder={ph()}>
      <ImageZoom
        image={{
          src: src,
          className: srcClassName,
        }}
      />
    </LazyLoadComponent>
  )
}

/* <LazyLoadImage
        height={"300px"}
        width={"300px"}
        effect="blur"
        src={imgDisplay.url}
        placeholderSrc={imgLoading.url}
        wrapperClassName={styles.cover}
        afterLoad={() => console.log("AFTER")}
        beforeLoad={() => console.log("BEFORE")}
      /> */

export default LazyZoomImage
