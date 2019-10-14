/**
 * This File maps to lazyblock/heading-bullet-container WP block.
 * A Heading Bullet has a heading title and a caption
 * The caption can be of body 1 or body 2 text
 *
 * A Heading Bullet Container has a list of Heading Bullets and
 * the grid style to apply to it.
 */

// ----------- IMPORT -----------

// Boiler
import React from "react"
import { IWPGBlock } from "react-gutenberg/"
// Components
import HeadingBullet from "./headingBullet"
// Styles
import styles from "../../styles/container-styles.module.scss"

// ----------- CODE -----------

const HeadingBulletContainer: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  // The Controller contains a URI with data
  const { controler, grid_style } = attrs as {
    controler: string
    grid_style: string
  }

  // Decode URi Data to an array of objects
  const contentBullets = JSON.parse(decodeURI(controler))

  // Returns an array containing HeadingBullet content elements
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
      {/* grid_style selects the css style to apply. WP 
      had grid styles mapped to grid styles in this scss file */}
      <div className={`${styles[grid_style]}`}>{createHeaderBullets()}</div>
    </div>
  )
}

export default HeadingBulletContainer
