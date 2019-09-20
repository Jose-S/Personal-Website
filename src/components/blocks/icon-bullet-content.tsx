import React from "react"
import { IWPGBlock } from "react-gutenberg/"
import Icon from "../IconSvg"
import styles from "../../styles/icon-bulet-content.module.scss"
import HeadingBullet from "./headingBullet"

const IconBulletContent: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  // Text to rotate animate
  const { title, content, info_icon, content_style, grid_style } = attrs as {
    title: string
    content: string
    info_icon: string
    content_style: string
    grid_style: string
  }

  console.log("ICON BULLET", props)
  const img =
    props.blockName === "lazyblock/icon-bullet-col"
      ? info_icon
      : JSON.parse(decodeURI(info_icon))

  const HeadingBulletData = {
    title: title,
    content: content,
    content_style: content_style,
  }

  const isGrid = grid_style === "grid_container"
  return (
    <div className={`wpg-block, ${styles.wrapper}`}>
      <div className={isGrid ? styles.wrapper_icon_grid : styles.wrapper_icon}>
        <Icon src={img} size={"48px"}></Icon>
      </div>
      <HeadingBullet
        innerHTML={props.innerHTML}
        innerBlocks={props.innerBlocks}
        blockName={props.blockName}
        attrs={HeadingBulletData}
      ></HeadingBullet>
    </div>
  )
}

export default IconBulletContent
