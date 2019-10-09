import React from "react"
import Layout from "../components/layout"
import WPGBlocks from "react-gutenberg"
import ProjectOverview from "../components/ProjectOverview.js"
import GetCustomBlock from "../components/blocks"
import styles from "../styles/project.module.scss"
import ProcessNavBar from "../components/ProcessNavBar"

export default ({ pageContext }) => <Layout>{setContent(pageContext)}</Layout>

function setContent(pageContext) {
  if (pageContext.acf.overview != "") {
    console.log("PROCESS", pageContext.acf.process)
    return (
      <>
        <ProjectOverview props={pageContext}></ProjectOverview>
        <h5 className={styles.overview_label}>Process</h5>
        <ProcessNavBar props={pageContext.acf.process} />
        <hr />
        <div className={styles.content_container}>
          <WPGBlocks
            blocks={pageContext.blocks}
            mapToBlock={GetCustomBlock}
          ></WPGBlocks>
        </div>
      </>
    )
  } else {
    return <h2>{`${pageContext.title} Under Construction`}</h2>
  }
}
