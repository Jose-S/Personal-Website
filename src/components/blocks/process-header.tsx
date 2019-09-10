import React from "react"
import { IWPGBlock } from "react-gutenberg/"

const ProcessHeader: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  // Text to rotate animate
  const { process_name, process_icon } = attrs as {
    process_name: string
    process_icon: string
  }
  const img = JSON.parse(decodeURI(process_icon))

  return (
    <div>
      <img src={img.url}></img>
      <h4>{process_name}</h4>
      <hr />
    </div>
  )
}

export default ProcessHeader
