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
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.css"
// import "../styles/Global/carousel.css"

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
    <Carousel showThumbs={true}>
      <div>
        <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  </Layout>
)

//   < WPGBlocks
// blocks = { props.allWordpressPage.edges[0].node.blocks }
// mapToBlock = { GetCustomBlock }
//   ></WPGBlocks >
export default IndexPage
