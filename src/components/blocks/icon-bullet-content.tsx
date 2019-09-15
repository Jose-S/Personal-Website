import React from "react"
import { IWPGBlock } from "react-gutenberg/"
import Icon from "../IconSvg"
import styles from "../../styles/icon-bulet-content.module.scss"

const IconBulletContent: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  // Text to rotate animate
  const { title, content, info_icon } = attrs as {
    title: string
    content: string
    info_icon: string
  }

  console.log("ICON BULLET", props)
  const img = JSON.parse(decodeURI(info_icon))

  return (
    <div className={`wpg-block, ${styles.wrapper}`}>
      <div>
        <Icon src={img} size={"48px"}></Icon>
      </div>
      <div>
        <h5>{title}</h5>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default IconBulletContent
