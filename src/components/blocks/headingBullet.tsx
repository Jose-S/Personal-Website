/**
 * This File maps to lazyblock/heading-bullet WP block.
 * A Heading Bullet has a heading title and a caption
 * The caption can be of body 1 or body 2 text
 */

// ----------- IMPORT -----------
import React from "react"
import { IWPGBlock } from "react-gutenberg/"

// ----------- CODE -----------
const HeadingBullet: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  const { title, content, content_style } = attrs as {
    title: string
    content: string
    content_style: boolean
  }

  // Just makes it easier to read
  var isHeaderBuller = props.blockName === "lazyblock/heading-bullet"
  var isSmall = content_style

  return (
    <div className={`${isHeaderBuller ? "wpg-block" : ""}`}>
      <h5>{title}</h5>
      <p className={`${isSmall ? "text--xs-body-two" : ""}`}>{content}</p>
    </div>
  )
}

export default HeadingBullet
