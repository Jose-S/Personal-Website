import React from "react"
import { IWPGBlock } from "react-gutenberg/"
import Typed from "react-typed"
import styles from "../../styles/large-title.module.scss"

const RotatingTypeAnimation: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props
  const delayTime = 750

  // Text to rotate animate
  const { first_text, second_text, third_text } = attrs as {
    first_text: string
    second_text: string
    third_text: string
  }

  // Returns a typed component from react-typed component made by
  // ssbeefeater (https://www.npmjs.com/package/react-typed)
  return (
    <Typed
      backDelay={delayTime}
      strings={[
        `<span class=${styles.first_text}>${first_text}</span>`,
        `<span class=${styles.second_text}>${second_text}</span>`,
        `<span class=${styles.third_text}>${third_text}</span>`,
      ]}
      typeSpeed={50}
      backSpeed={60}
      loop
    />
  )
}

export default RotatingTypeAnimation
