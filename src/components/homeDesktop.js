/**
 * This page creates the home page for desktop
 * Animated with a paralex scroll fro both items and heading
 * THe heading is fixed
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
import stylesDesktop from "../styles/home-desktop.module.scss"
import ProjectItems from "../components/ProjectItems"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import Footer from "../components/Footer"

const HomeIndexPage = () => {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 0.7], [1.25, 1])
  const y = useTransform(scrollYProgress, [0, 0.7], ["0vh", "-16vh"])
  const y2 = useTransform(scrollYProgress, [0, 0.7], ["0vh", "-42vh"])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0.25, 1])

  // FOR DEBUGING
  //   const getVal = () => {
  //     console.log("Y PROGRESS ", scrollYProgress.get())
  //     console.log("TEXT SCALE ", scale.get())
  //     console.log("TEXT Y ", y.get())
  //     console.log("CARDS Y ", y2.get())
  //   }

  //   getVal()

  return (
    <Layout isHome={true}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "135vh",
          justifyContent: "flex-end",
        }}
      >
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
              className={`${styles.center} `}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
              }}
            >
              <motion.h3
                className={styles.largeWorkTitle}
                style={{ scale, y, position: "fixed" }}
                //  onClick={() => getVal()}
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
        <div style={{ height: "35vh" }}>
          <motion.div
            style={{
              opacity,
              translateY: y2,
              position: "fixed",
              width: "960px",
            }}
          >
            <ProjectItems />
            <motion.div>
              <Footer isHome={true} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export default HomeIndexPage
