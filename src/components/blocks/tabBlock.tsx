import React from "react"
import { IWPGBlock } from "react-gutenberg/"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "../../styles/tabs-block.scss"

const TabsBlock: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  // Text to rotate animate
  const { controler } = attrs as {
    controler: string
  }

  // Used to add a line break after thw word "who"
  const content = JSON.parse(decodeURI(controler))

  // Returns an array containing IconBulletContent elements
  var createTabs = () => {
    let col = []
    content.forEach((tab, index) => {
      col.push(<Tab key={index}>{tab.title}</Tab>)
    })
    return col
  }

  var createTabPanels = () => {
    let col = []

    let largestI = 0
    content.forEach((tab, i) => {
      if (tab.content.length > content[largestI].content.length) {
        largestI = i
      }
    })

    console.log("WINNER", largestI)

    content.forEach((tab, index) => {
      col.push(
        <TabPanel
          key={index}
          style={{
            top: "0px",
            position: `${index == largestI ? "relative" : "absolute"}`,
          }}
        >
          <p>{tab.content}</p>
        </TabPanel>
      )
    })
    return col
  }

  return (
    <Tabs forceRenderTabPanel={true}>
      <TabList>{createTabs()}</TabList>
      <div className="stack_wrapper">{createTabPanels()}</div>
    </Tabs>
  )
}

export default TabsBlock
