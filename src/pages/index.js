/**
 * This page creates the home page
 * TODO: MAJOR REFACTORING AND LAYOUT CHANGES
 * WILL INCORPORATE ANIMATION
 *
 * FOR ANIMATION TO WORK: Styles must override everything else. This
 * is why im using in-line styles (easiest solution)
 */
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
import { useIsDesktop } from "../components/Responsive"
import HomeIndexPage from "../components/homeDesktop"
import { motion, useViewportScroll, useTransform } from "framer-motion"

const IndexPage = () => {
  var isDesktop = useIsDesktop()
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 0.7], [1.2, 0.85])
  const y = useTransform(scrollYProgress, [0, 0.5], ["0vh", "-50vh"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const val = useTransform(scrollYProgress, [0, 1], [0, 1])

  // FOR DEBUGING
  // const getVal = () => {
  //   console.log("Y PROGRESS ", scrollYProgress.get())
  //   console.log("TEXT SCALE ", scale.get())
  //   console.log("TEXT Y ", y.get())
  // }

  // getVal()

  if (isDesktop) {
    return <HomeIndexPage />
  } else {
    return (
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
                        controler
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
            <div
              className={styles.center}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "75vh",
              }}
            >
              <motion.h3
                // onClick={() => getVal()}
                className={styles.largeWorkTitle}
                style={{ opacity, scale, y, position: "fixed" }}
              >
                <WPGBlock
                  block={props.allWordpressPage.edges[0].node.blocks[0]}
                  mapToBlock={GetCustomBlock}
                />
                <WPGBlock
                  block={props.allWordpressPage.edges[0].node.blocks[2]}
                  mapToBlock={GetCustomBlock}
                />
                <WPGBlock
                  block={props.allWordpressPage.edges[0].node.blocks[4]}
                  mapToBlock={GetCustomBlock}
                />
              </motion.h3>
            </div>
          )}
        />
        <motion.h3 style={{ opacity: scrollYProgress * 2, color: "#000" }}>
          Work
        </motion.h3>
        <ProjectItems />
      </Layout>
    )
  }
}

export default IndexPage
