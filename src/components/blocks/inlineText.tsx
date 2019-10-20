/**
 *  This is a very speciifc component used to troubleshoot
 *  the animated text on th efront page
 */

// ----------- IMPORT -----------

//Boiler
import React from "react"
import { IWPGBlock } from "react-gutenberg/"
import { useWindowWidth } from "../Responsive"

const InlineText: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  var { inline_text } = attrs as {
    inline_text: string
  }

  const isMobile = useWindowWidth(924)
  // Used to add a line break after thw word "who"
  // Only if not mobile
  if (inline_text.includes("who") && !isMobile) {
    let endIndex = inline_text.indexOf("who") + 3
    let endIndexA = inline_text.indexOf(" a") + 2

    return (
      <span>
        &nbsp;
        {inline_text.substring(0, endIndex)}
        <br />
        {inline_text.substring(endIndex, endIndexA)}
        <br />
        {inline_text.substring(endIndexA)}
      </span>
    )
  }

  // if on mobile. Add a line break at the end of the first inline block
  // and a line break at the start if the second inline block
  if (isMobile) {
    if (inline_text.includes("who")) {
      return (
        <span>
          <br />
          {inline_text}
        </span>
      )
    }

    if (inline_text.endsWith("a")) {
      return (
        <span>
          {inline_text}
          <br />
        </span>
      )
    }
  }
  return <span>{inline_text}&nbsp;</span>
}

export default InlineText
