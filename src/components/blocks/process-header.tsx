import React from "react"
import { IWPGBlock } from "react-gutenberg/"
import Icon from "../IconSvg"
import styles from "../../styles/process-header.module.scss"
import { Element } from "react-scroll"

const ProcessHeader: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  // Text to rotate animate
  const { process_name, process_icon } = attrs as {
    process_name: string
    process_icon: string
  }
  console.log("IMAGE", process_icon)
  const img = JSON.parse(decodeURI(process_icon))

  //   const svg = getIcon(title)
  //   const sv2 = getIcon(title)
  console.log("IMAGE", img)

  return (
    <Element name={process_name} className={`wpg-block ${styles.wrapper}`}>
      {/* <div className={`wpg-block ${styles.wrapper}`}> */}
      <div className={styles.outer_circle}>
        <Icon src={img} size="32px"></Icon>
      </div>

      <h6 className={styles.header_title}>{process_name}</h6>
      {/* </div> */}
    </Element>
  )
}

export default ProcessHeader
