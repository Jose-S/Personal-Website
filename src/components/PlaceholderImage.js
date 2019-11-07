/**
 * This file creates an image componenet used inside
 * of the placeholder image gallery. It contains a
 * lazy loaded image with a caption.
 */
// BOILER
import React from "react"
// components
import Img from "gatsby-image"
import style from "../styles/placeholder-image.module.scss"

const PlaceholderImage = ({
  index,
  onClick,
  photo,
  margin,
  direction,
  top,
  left,
}) => {
  console.log("DATA: ", photo)

  const imgStyle = { margin: margin, cursor: "pointer" }
  if (direction === "column") {
    imgStyle.position = "absolute"
    imgStyle.left = left
    imgStyle.top = top
  }

  const handleClick = event => {
    onClick(event, { photo, index })
  }

  return (
    <div className={style.container} style={{ width: photo.width }}>
      <Img
        fluid={photo.src}
        key={photo.key}
        style={imgStyle}
        //   title={photo.key}
        alt={photo.caption}
        onClick={onClick ? handleClick : null}
        className={style.img_test}
      />
      <div
        className={style.caption_container}
        style={{ margin: margin, width: photo.width - 2 * margin }}
        onClick={onClick ? handleClick : null}
      >
        <h5 className={style.caption}>{photo.title}</h5>
      </div>
    </div>
  )
}

export default PlaceholderImage
