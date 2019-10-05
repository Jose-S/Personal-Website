import React from "react"
import { IWPGBlock } from "react-gutenberg/"
import HeadingBullet from "./headingBullet"
import styles from "../../styles/container-styles.module.scss"

const HeadingBulletContainer: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  // The Controller contains a URI with data
  const { controler, grid_style } = attrs as {
    controler: string
    grid_style: string
  }

  // Decode UR Data to an array of objects
  const contentBullets = JSON.parse(decodeURI(controler))

  // Returns an array containing IconBulletContent elements
  var createHeaderBullets = () => {
    let group = []
    contentBullets.forEach((content, index) =>
      group.push(
        <HeadingBullet
          innerHTML={props.innerHTML}
          innerBlocks={props.innerBlocks}
          blockName={props.blockName}
          attrs={content}
          key={index}
        ></HeadingBullet>
      )
    )
    return group
  }

  return (
    <div className={`wpg-block ${styles.wrapper}`}>
      <div className={`${styles[grid_style]}`}>{createHeaderBullets()}</div>
    </div>
  )
}

export default HeadingBulletContainer
