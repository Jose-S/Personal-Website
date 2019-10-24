/**
 * This file contains a component that transforms
 * an svg file into an inline svg elelement.
 * An inline SVG element allows me to apply CSS classes to each
 * stroke, manipualte its size using the default font, and in the future
 * animate them.
 *
 * The componnet takes in:
 *   - A src either an object with a url or a string url
 *   - The size of the icon in "00px" format
 *
 * SOME SVGS ARE LOADED THROUGH A LOCAL FILE BEACUASE OF CROSS ORIGIN
 * ISSUES WITH SVG FILES ACROSS TH INTERNET (FIx Later, current temporary solution)
 */

// ----------- IMPORT -----------

// Boiler
import React from "react"
// Component
import ReactSVG from "react-svg"
import IconPlaceholder from "../images/IconPlaceholder.svg"
// Styles
import styles from "../styles/Global/icon.module.scss"

// ----------- CODE -----------

const Icon = ({ src, size = "" }) => {
  console.log("ICON URL PRE", src, typeof src)

  const { title, url } = src
  const strURL = `../../${typeof src === `string` ? src : title + ".svg"}`
  // Type chck if its an object
  console.log("ICON URL", title, url, strURL)
  // Create an SVG React Component
  return (
    <ReactSVG
      title={title}
      // CURRENTLY ALL SVG FILES ARE RENDERED USING THE STATIC FOLDER
      // SO NO NEED TO USE THE URL
      // src={typeof src === `string` ? strURL : url}
      src={strURL}
      fallback={() => (
        // SHOULD NOT BE REACHED USING THE CURRENT SET UP
        <img
          src={strURL ? strURL : IconPlaceholder}
          className={styles.icon}
          alt="Placeholder Icon"
        />
      )}
      loading={() => (
        <span>
          <img
            src={IconPlaceholder}
            className={styles.icon}
            alt="Loading Icon"
          />
        </span>
      )}
      // CURRENTLY NOT USED AS SVGS ARE RENDERED STATICLY USING THE STATIC FOLDER
      // afterInjection={typeof src === `string` ? () => {} : postLoad}
      beforeInjection={preLoad}
      className={getSize(size)}
      wrapper="span"
      // onError={() => console.log("ERROR FOR CORS")}
    />
  )
}

// CURRENTLY NOT USED (MIGHT BE IN THE FUTURE)
// Post Load
// Adds attributes to svg after load
function postLoad(error, svg) {
  // Handle Errors
  if (error) {
    return
  }
  let paths = svg.getElementsByTagName("path")

  // Adds diffrentstyles to svg paths depending on the number of paths

  switch (paths.length) {
    case 1:
      resetClass(paths[0], styles.light_icon_color)
      break
    case 3:
      resetClass(paths[0], styles.icon_stroke_one)
      resetClass(paths[1], styles.icon_stroke_two)
      resetClass(paths[2], styles.icon_stroke_three)
      break
    default:
      console.log("ERROR NO PATHS. SVG OUTPUT: ", svg)
  }
}

// Pre Load
// Adds attributes to svg before load
function preLoad(svg) {
  // console.log("IM BEOFRE", svg) // For Testing
  svg.classList.add(styles.icon)
  // Make sure svg is set to
  svg.setAttribute(`width`, `1em`)
  svg.setAttribute(`height`, `1em`)
  // Make sure svg scales to the view bounds and not the view box
  // Makes sure proportions are kept and font size adjusts icon
  svg.setAttribute(`preserveAspectRatio`, `MidYMid meet`)
}

// ----------- UTILITY -----------

// Function maps a tring size to a css class
function getSize(px) {
  switch (px) {
    case "12px":
      return styles.icon__xs
    case "24px":
      return styles.icon__sm
    case "28px":
      return styles.icon__mds
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

export default Icon
