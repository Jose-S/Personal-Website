/* This File controls the template for a play project. 
This file is important nd dynamically creates each project case study.
If this file is edited add an important tag to the commit!*/

// ---------------- IMPORTS ----------------------

// LIBRARIES
import React from "react"
import WPGBlocks from "react-gutenberg"
// COMPONENT
import Layout from "../components/layout"
import PlayOverview from "../components/PlayOverview"
import GetCustomBlock from "../components/blocks"
// STYLES
import styles from "../styles/project.module.scss"

// ---------------- CODE ----------------------

export default ({ pageContext }) => <Layout>{setContent(pageContext)}</Layout>

function setContent(pageContext) {
  // If the case study is not under construction (Wordpress ACF fields are not empty)
  if (pageContext.acf.overview !== "") {
    console.log("PROCESS", pageContext.acf.process)
    return (
      <>
        <PlayOverview props={pageContext}></PlayOverview>
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
