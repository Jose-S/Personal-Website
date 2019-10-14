/**
 * This file creates a lazy loaded
 * zoom image. This type of image has a medium
 * zoom effect
 *
 * The componnet takes in:
 *   - A src of the image to lazyload
 *   - A src to the lazyload placeholder
 */

// ----------- IMPORT -----------

// Boiler
import React, { useState } from "react"
// Components
import ImageZoom from "react-medium-image-zoom"
import LazyLoad from "react-lazy-load"
import LoadingImage from "./LoadingImage"
// Styles
import styles from "../styles/image-dialog.module.scss"

// ----------- CODE -----------

const LazyZoomImage = ({ src, placeholderSrc }) => {
  const [isLoading, setIsLoading] = useState(true)

  // Lazy loads an image zoom component
  return (
    <div className={styles.images_wrapper}>
      <LoadingImage
        src={placeholderSrc}
        srcClassName={isLoading ? styles.fadeIn : styles.fadeOut}
        positionClass={styles.inner_loading_image}
      ></LoadingImage>

      {/* Lazyload zoom image */}
      <LazyLoad
        offsetVertical={500}
        width="100%"
        onContentVisible={() => setIsLoading(false)}
        className={styles.image_stacker__bottom}
      >
        <ImageZoom
          image={{
            src: src,
            className: styles.image_wrapper,
          }}
        />
      </LazyLoad>
    </div>
  )
}
export default LazyZoomImage
