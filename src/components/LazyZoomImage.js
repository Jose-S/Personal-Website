import React, { useState } from "react"
import ImageZoom from "react-medium-image-zoom"
import LazyLoad from "react-lazy-load"
import LoadingImage from "./LoadingImage"
// import styles from "../styles/zoom-image.module.scss"
import styles from "../styles/image-dialog.module.scss"
const LazyZoomImage = ({
  src,
  placeholderSrc,
  srcClassName = "",
  placeholderClassName = "",
}) => {
  const [isLoading, setIsLoading] = useState(true)

  // Don't want to create a new file for just one style

  // Lazy loads an image zoom component
  return (
    <div className={styles.images_wrapper}>
      <LoadingImage
        src={placeholderSrc}
        srcClassName={isLoading ? styles.fadeIn : styles.fadeOut}
        positionClass={styles.inner_loading_image}
      ></LoadingImage>

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
    // <div style={{ display: "grid" }}>
    //   <LoadingImage
    //     src={placeholderSrc}
    //     srcClassName={isLoading ? styles.fadeIn : styles.fadeOut}
    //     positionClass={styles.image_stacker__top}
    //   ></LoadingImage>
    //   <LazyLoad
    //     offsetVertical={500}
    //     height="100%"
    //     onContentVisible={() => setIsLoading(false)}
    //     className={styles.image_stacker__bottom}
    //   >
    //     <ImageZoom
    //       image={{
    //         src: src,
    //         className: srcClassName,
    //       }}
    //     />
    //   </LazyLoad>
    // </div>
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
