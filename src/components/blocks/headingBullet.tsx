import React from "react"
import { IWPGBlock } from "react-gutenberg/"
import styles from "../../styles/heading-bullet.module.scss"

const HeadingBullet: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  // Text to rotate animate
  const { title, content, content_style } = attrs as {
    title: string
    content: string
    content_style: boolean
  }

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
