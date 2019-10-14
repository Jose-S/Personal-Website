/**
 * Creates a loading image placeholder from the given source (usually a 1kb image file)
 * This image is either blured or if not provided a conten loader svg rectangle is uses as
 * the placeholder.
 */

// ----------- IMPORT -----------

import React from "react"
import ContentLoader from "react-content-loader"

// ----------- CODE -----------

const LoadingImage = ({ src, srcClassName = "", positionClass = "" }) => {
  // Blur Up the image
  if (src !== "") {
    return (
      <div className={srcClassName}>
        <img alt={"placeholder"} src={src} className={positionClass} />
      </div>
    )
    // Return a loading svg with fade animation
  } else {
    return (
      <ContentLoader
        height={155}
        width={300}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        className={srcClassName}
      ></ContentLoader>
    )
  }
}

export default LoadingImage
