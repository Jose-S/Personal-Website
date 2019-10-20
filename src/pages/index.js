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
import HomeIndexPageMobile from "../components/homeMobile"
import Footer from "../components/Footer"

const IndexPage = () => {
  const { scrollYProgress } = useViewportScroll()
  var isDesktop = useIsDesktop()

  const scrollIn = isDesktop ? [0, 0.7] : [0, 0.6]
  const scaleOut = isDesktop ? [1.25, 1] : [1.2, 0.85]
  const opacityOut = isDesktop ? [0.25, 1] : [1, 0]
  const yOut = isDesktop ? ["0vh", "-16vh"] : ["0vh", "-45vh"]

  const scale = useTransform(scrollYProgress, [0, 0.7], scaleOut)
  const y = useTransform(scrollYProgress, [0, 0.7], yOut)
  const y2 = useTransform(scrollYProgress, scrollIn, ["0vh", "-42vh"])
  const opacity = useTransform(scrollYProgress, scrollIn, opacityOut)

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
        style={
          isDesktop
            ? {
                display: "flex",
                flexDirection: "column",
                height: "135vh",
                justifyContent: "flex-end",
              }
            : {}
        }
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
                height: isDesktop ? "100vh" : "75vh",
              }}
            >
              <motion.h3
                className={styles.largeWorkTitle}
                style={
                  isDesktop
                    ? { scale, y, position: "fixed" }
                    : { opacity, scale, y, position: "fixed" }
                }
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

        {isDesktop ? (
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
        ) : (
          <>
            <motion.h3 style={{ opacity: scrollYProgress, color: "#000" }}>
              Work
            </motion.h3>
            <ProjectItems />
          </>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
