/**
 * This File maps to lazyblock/icon-bullet-col WP block.
 * An Icon Bullet Container has a list of Icon Bullets and
 * defined grid style.
 */

// ----------- IMPORT -----------

// Boiler
import React from "react"
import { IWPGBlock } from "react-gutenberg/"
//Components
import IconBulletContent from "./iconBullet"
//Styles
import styles from "../../styles/container-styles.module.scss"

// ----------- CODE -----------

const IconBulletContainer: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  // The Controller contains a URI with data
  const { controler, grid_style } = attrs as {
    controler: string
    grid_style: string
  }

  // Decode URI Data to an array of objects
  const iconBullets: Array<any> = JSON.parse(decodeURI(controler))

  // Returns an array containing IconBulletContent elements
  var createIconBullets = () => {
    let col = []
    iconBullets.forEach((bullet, index) => {
      // Add grid style from container
      bullet.grid_style = grid_style
      col.push(
        <IconBulletContent
          innerHTML={props.innerHTML}
          innerBlocks={props.innerBlocks}
          blockName={props.blockName}
          attrs={bullet}
          key={index}
        ></IconBulletContent>
      )
    })
    return col
  }

  return (
    <div className={`wpg-block ${styles.wrapper}`}>
      <div className={`${styles[grid_style]}`}>{createIconBullets()}</div>
    </div>
  )
}

export default IconBulletContainer
