import React from "react"
import ReactSVG from "react-svg"
import styles from "../styles/Global/icon.module.scss"
import IconPlaceholder from "../images/IconPlaceholder.svg"

var icons = {}
console.log("ICONS", icons)

// Default Props with destructuring
// src: Image Object
// className: Style Class
const Icon = ({ src, size = "" }) => {
  const { title, url } = src
  console.log("ICON URL", url)
  // Create an SVG React Component
  return (
    <ReactSVG
      title={title}
      src={url}
      fallback={() => (
        <img
          src={IconPlaceholder}
          className={styles.icon}
          alt="Placeholder Icon"
        />
      )}
      loading={() => <span>Loading</span>}
      afterInjection={postLoad}
      beforeInjection={preLoad}
      className={getSize(size)}
      wrapper="span"
    />
  )
}

function getSize(px) {
  switch (px) {
    case "12px":
      return styles.icon__xs
    case "24px":
      return styles.icon__sm
    case "32px":
      return styles.icon__md
    case "48px":
      return styles.icon__lg
    case "64px":
      return styles.icon__xl
    default:
      return styles.icon__sm
  }
}
// Function for removing classes of an element
// and replacing it with newClass
function resetClass(element, newClass = "") {
  let classList = element.classList
  classList.remove(classList.item(0))
  classList.add(newClass)
}

// Post Load
function postLoad(error, svg) {
  // Handle Errors
  if (error) {
    // Removed FOr Testing
    // console.error(error)
    return
  }
  // Add classes to svg paths
  let paths = svg.getElementsByTagName("path")
  // Main Path Classes
  resetClass(paths[0], styles.icon_stroke_one)
  resetClass(paths[1], styles.icon_stroke_two)
  resetClass(paths[2], styles.icon_stroke_three)
}

// Pre Load
function preLoad(svg) {
  console.log("IM BEOFRE", svg)
  svg.classList.add(styles.icon)
  // Make sure svg is set to
  svg.setAttribute(`width`, `1em`)
  svg.setAttribute(`height`, `1em`)
  // Make sure svg scales to the view bounds and not the view box
  // Makes sure proportions are kept and font size adjusts icon
  svg.setAttribute(`preserveAspectRatio`, `MidYMid meet`)
}

export default Icon
