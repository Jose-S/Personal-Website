/**
 * This File maps to lazyblock/icon-bullet-content WP block.
 * An Icon Bullet has a icon, heading title and a caption
 * The caption can be of body 1 or body 2 text
 */

// ----------- IMPORT -----------

// Boiler
import React from "react"
import { IWPGBlock } from "react-gutenberg/"
// Components
import styles from "../../styles/icon-bulet-content.module.scss"
// Styles
import Icon from "../IconSvg"
import HeadingBullet from "./headingBullet"

// ----------- CODE -----------

const IconBullet: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  const { title, content, info_icon, content_style, grid_style } = attrs as {
    title: string
    content: string
    info_icon: string
    content_style: string
    grid_style: string
  }
  const iconSize: number = 48

  // Parse the info_icon into an object with a url to the icon
  // Only if its a non-processed icon-bullet-content
  // (Has not been passed through a different component)
  const icon: Object =
    props.blockName !== "lazyblock/icon-bullet-content"
      ? info_icon
      : JSON.parse(decodeURI(info_icon))

  // Object used to create the Heading Bullet inside of this component
  const HeadingBulletData: Object = {
    title: title,
    content: content,
    content_style: content_style,
  }

  // Bool
  const isGrid: boolean = grid_style === "grid_container"

  return (
    <div className={`wpg-block, ${styles.wrapper}`}>
      {/* Changes position of icon base don grid type */}
      <div className={isGrid ? styles.wrapper_icon_grid : styles.wrapper_icon}>
        {/* TODO: Potentially make the size of this icon dynamic. CSS deos this already, so not urgent*/}
        <Icon src={icon} size={`${iconSize}px`}></Icon>
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

export default IconBullet
