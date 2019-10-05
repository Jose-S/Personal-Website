import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import WPGBlocks from "react-gutenberg"
import { WPGBlock } from "react-gutenberg"
import GetCustomBlock from "../components/blocks"
import styles from "../styles/large-title.module.scss"
import ProjectItems from "../components/ProjectItems"
import "react-responsive-carousel/lib/styles/carousel.css"


const IndexPage = () => (
  <Layout>
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
  </Layout>
)

//   < WPGBlocks
// blocks = { props.allWordpressPage.edges[0].node.blocks }
// mapToBlock = { GetCustomBlock }
//   ></WPGBlocks >
export default IndexPage
