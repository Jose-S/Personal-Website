import React from "react"
import Layout from "../components/layout"
import WPGBlocks from "react-gutenberg"
import ProjectOverview from "../components/ProjectOverview.js"

export default ({ pageContext }) => <Layout>{setContent(pageContext)}</Layout>

function setContent(pageContext) {
  if (pageContext.acf.overview != "") {
    return (
      <div>
        <ProjectOverview props={pageContext}></ProjectOverview>
        <WPGBlocks blocks={pageContext.blocks}></WPGBlocks>
      </div>
    )
  } else {
    return <h2>{`${pageContext.title} Under Construction`}</h2>
  }
}
