import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
// import WPGBlocks from "react-gutenberg"
import { WPGBlock } from "react-gutenberg"
import GetCustomBlock from "../components/blocks"
import styles from "../styles/large-title.module.scss"
import ProjectItems from "../components/ProjectItems"

const IndexPage = () => (
  <>
    <StaticQuery
      query={graphql`
        {
          allWordpressPage(filter: { title: { eq: "Work" } }) {
            edges {
              node {
                id
                slug
                title
                blocks {
                  blockName
                  innerHTML
                  attrs {
                    inline_text
                    first_text
                    second_text
                    third_text
                    blockId
                    blockUniqueClass
                  }
                }
              }
            }
          }
        }
      `}
      render={props => (
        <div className={styles.center}>
          <h3 className={styles.largeWorkTitle}>
            <WPGBlock
              block={props.allWordpressPage.edges[0].node.blocks[0]}
              mapToBlock={GetCustomBlock}
            />
            &nbsp;
            <WPGBlock
              block={props.allWordpressPage.edges[0].node.blocks[2]}
              mapToBlock={GetCustomBlock}
            />
            &nbsp;
            <WPGBlock
              block={props.allWordpressPage.edges[0].node.blocks[4]}
              mapToBlock={GetCustomBlock}
            />
          </h3>
        </div>
      )}
    />
    <ProjectItems />
  </>
)

//   < WPGBlocks
// blocks = { props.allWordpressPage.edges[0].node.blocks }
// mapToBlock = { GetCustomBlock }
//   ></WPGBlocks >
export default IndexPage
