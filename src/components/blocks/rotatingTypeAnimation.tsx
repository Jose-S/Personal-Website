/**
 *  This File maps to lazyblock/rotating-type-animation WP block.
 *  Creates a rotating type animation using the given list of text
 *  Animation mimics text typing and deleting.
 */

// ----------- IMPORT -----------

// Boiler
import React from "react"
import { IWPGBlock } from "react-gutenberg/"
// Components
import Typed from "react-typed"
// Styles
import styles from "../../styles/large-title.module.scss"

const RotatingTypeAnimation: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props
  const delayTime = 750

  // Text to rotate animate
  const { controler } = attrs as {
    controler: string
  }

  const textToRotate: Array<any> = JSON.parse(decodeURI(controler))

  // Creates an array containing the strings to rotate
  var createStrings = () => {
    let strings: Array<string> = []
    textToRotate.forEach((str, index) => {
      strings.push(`<span class=${getStyle(index + 1)}>${str.text}</span>`)
    })

    return strings
  }

  // Get the string style. Used to change the color of the rotating text
  var getStyle = (index: number) => {
    if (index % 3 === 0) {
      return styles.third_text
    } else if (index % 2 === 0) {
      return styles.second_text
    } else {
      return styles.first_text
    }
  }

  // Returns a typed component from react-typed component made by
  // ssbeefeater (https://www.npmjs.com/package/react-typed)
  return (
    <Typed
      backDelay={delayTime}
      strings={createStrings()}
      typeSpeed={50}
      backSpeed={60}
      loop
    />
  )
}

export default RotatingTypeAnimation
