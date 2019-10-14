/**
 *  This File maps to lazyblock/process-header WP block.
 *  This header is used to divided different sections of the case study
 *  Sections are group based on theie step in the design process
 */

// ----------- IMPORT -----------

// BOILER
import React from "react"
import { IWPGBlock } from "react-gutenberg/"
// COMPONENTS
import Icon from "../IconSvg"
import styles from "../../styles/process-header.module.scss"
import { Element } from "react-scroll"

const ProcessHeader: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  const { process_name, process_icon } = attrs as {
    process_name: string
    process_icon: string
  }

  const icon = JSON.parse(decodeURI(process_icon))

  return (
    <Element className={`wpg-block ${styles.wrapper}`} name={process_name}>
      {/* <div className={`wpg-block ${styles.wrapper}`}> */}
      <div className={styles.outer_circle}>
        <Icon src={icon} size="32px"></Icon>
      </div>

      <h6 className={styles.header_title}>{process_name}</h6>
      {/* </div> */}
    </Element>
  )
}

export default ProcessHeader
