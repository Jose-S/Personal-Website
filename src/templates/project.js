/* This File controls the template for a work project. 
This file is important nd dynamically creates each project case study.
If this file is edited add an important tag to the commit!*/

// ---------------- IMPORTS ----------------------

// LIBRARIES
import React from "react"
import WPGBlocks from "react-gutenberg"
// COMPONENT
import Layout from "../components/layout"
import ProjectOverview from "../components/ProjectOverview.js"
import GetCustomBlock from "../components/blocks"
import ProcessNavBar from "../components/ProcessNavBar"
// STYLES
import styles from "../styles/project.module.scss"

// ---------------- CODE ----------------------

// export default ({ pageContext }) => <Layout>{setContent(pageContext)}</Layout>

export default ({ pageContext }) => {
  return setContent(pageContext)
}

function setContent(pageContext) {
  // If the case study is not under construction (Wordpress ACF fields are not empty)
  if (pageContext.acf.overview !== "") {
    console.log("PROCESS", pageContext.acf.process)
    return (
      <>
        <ProjectOverview props={pageContext}></ProjectOverview>
        {/* Process Nav Bar. TODO: Animate process nav bar to move to the side
      when the user scrolls down */}
        <h5 className={styles.overview_label}>Process</h5>
        <ProcessNavBar props={pageContext.acf.process} />
        <hr />
        {/* Creates a Div containing all the Wordpress Blocks mapped to areact
        component. Uses the GetCustomBlock function to map WP to React  */}
        <div className={styles.content_container}>
          <WPGBlocks
            blocks={pageContext.blocks}
            mapToBlock={GetCustomBlock}
          ></WPGBlocks>
        </div>
      </>
    )
  } else {
    return <h2>{`${pageContext.title} Under Construction 🚧`}</h2>
  }
}
