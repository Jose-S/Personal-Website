import React from "react"
import Layout from "../components/layout"
import WPGBlocks from "react-gutenberg"
import ProjectOverview from "../components/ProjectOverview.js"
import GetCustomBlock from "../components/blocks"

export default ({ pageContext }) => <Layout>{setContent(pageContext)}</Layout>

function setContent(pageContext) {
  if (pageContext.acf.overview != "") {
    return (
      <div>
        <ProjectOverview props={pageContext}></ProjectOverview>
        <WPGBlocks
          blocks={pageContext.blocks}
          mapToBlock={GetCustomBlock}
        ></WPGBlocks>
      </div>
    )
  } else {
    return <h2>{`${pageContext.title} Under Construction`}</h2>
  }
}
