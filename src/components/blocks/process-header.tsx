import React from "react"
import { IWPGBlock } from "react-gutenberg/"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import Icon from "../IconSvg"
import ReactSVG from "react-svg"
import { render } from "react-dom"

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
  const title = img.title

  //   const svg = getIcon(title)
  //   const sv2 = getIcon(title)
  console.log("IMAGE", img)

  return (
    <div className={"wpg-block"}>
      <h4>{process_name}</h4>
      <Icon src={img} size="64px"></Icon>
      <hr />
    </div>
  )
}

export default ProcessHeader
