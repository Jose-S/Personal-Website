import React from "react"
import ContentLoader from "react-content-loader"

const LoadingImage = ({ src, srcClassName = "", positionClass = "" }) => {
  // Blur Up the image
  if (src !== "") {
    return (
      <div
        className={srcClassName}
        // style={{ overflow: "hidden", position: "relative", width: "100%" }}
      >
        <img
          alt={"placeholder"}
          src={src}
          className={positionClass}
          // style={{ width: "100%", filter: "blur(10px)" }}
        />
      </div>
      // LEFT HERWE IF I DECIDE TO USE AN SVG FILTER INSTEAD
      // <svg
      //   xmlns="http://www.w3.org/2000/svg"
      //   xmlnsXlink="http://www.w3.org/1999/xlink"
      //   viewBox="1 1 6 4"
      //   className={srcClassName}
      // >
      //   <image filter="url(#b)" width="8" height="6" xlinkHref={src} />
      //   <filter id="b">
      //     <feGaussianBlur stdDeviation=".5" />
      //   </filter>
      // </svg>
    )
    // Return a loading svg
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
