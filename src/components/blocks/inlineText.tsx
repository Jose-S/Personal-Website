import React from "react"
import { IWPGBlock } from "react-gutenberg/"

const InlineText: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  // Text to rotate animate
  const { inline_text } = attrs as {
    inline_text: string
  }

  // Used to add a line break after thw word "who"
  if (inline_text.includes("who")) {
    let endIndex = inline_text.indexOf("who") + 3
    return (
      <span>
        {inline_text.substring(0, endIndex)}
        <br />
        {inline_text.substring(endIndex)}
      </span>
    )
  }
  return <span>{inline_text}</span>
}

export default InlineText
