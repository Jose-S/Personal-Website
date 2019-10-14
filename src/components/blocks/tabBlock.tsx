/**
 *  This File maps to lazyblock/tabs WP block.
 *  Creates a set of tabs used to navigate/view different content
 *  Currently it only supports text
 *  TODO: Add Image and Video support  (Currently not urgent)
 */

// ----------- IMPORT -----------

import React from "react"
import { IWPGBlock } from "react-gutenberg/"
// Components
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
// Styles
import "../../styles/tabs-block.scss"

const TabsBlock: React.FC<IWPGBlock> = props => {
  // Componnet Props and attributes
  const { attrs } = props

  const { controler } = attrs as {
    controler: string
  }

  const content = JSON.parse(decodeURI(controler))

  // Returns an array containing tab elements
  var createTabs = () => {
    let tabs = []
    content.forEach((tab, index) => {
      tabs.push(<Tab key={index}>{tab.title}</Tab>)
    })
    return tabs
  }

  var createTabPanels = () => {
    let panels = []

    // Fnds the index of the longest tab content (Most words)
    // THis is used to set the height of the tab panel
    let largestI = 0
    content.forEach((tab, i) => {
      if (tab.content.length > content[largestI].content.length) {
        largestI = i
      }
    })

    // THe tab with the longest tab content will be positioned relatively
    // and the rest will be placed absolutely
    content.forEach((tab, index) => {
      panels.push(
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
    return panels
  }

  return (
    <Tabs className="wpg-block" forceRenderTabPanel={true}>
      {/* TAB TITLES */}
      <TabList>{createTabs()}</TabList>
      {/* TAB CONTENT */}
      <div className="stack_wrapper">{createTabPanels()}</div>
    </Tabs>
  )
}

export default TabsBlock
