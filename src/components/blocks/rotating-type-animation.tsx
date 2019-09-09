import React from "react"
import { IWPGBlock } from "react-gutenberg/"
import Typed from "react-typed"

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
        `<span style="color: blue;">${first_text}</span>`,
        `<span style="color: red;">${second_text}</span>`,
        `<span style="color: green;">${third_text}</span>`,
      ]}
      typeSpeed={50}
      backSpeed={60}
      loop
    />
  )
}

export default RotatingTypeAnimation
