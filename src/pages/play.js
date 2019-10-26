/**
 * This File creates a play page.
 *
 * A play page contains all types of projects.
 * These projects are shorter and less structured.
 * The whole design process isn't followed.
 *
 * THESE ARE NOT CASE STUDIES
 *
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
import "../styles/Global/layout.scss"
import Footer from "../components/Footer"
import Header from "../components/Header"

import { Stickyroll } from "@stickyroll/stickyroll"
import { useIsMobile } from "../components/Responsive"
import PlayItems from "../components/PlayItems"

function mapRange(val, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (val - low1)) / (high1 - low1)
}

// Uses the distance that has been scrolled to calculate
// The transisition and opacity value sof certain elements
const PlayPage = () => {
  const bottomH3Delay = 0
  // Oppasity detal for h3 bottom
  const bH3ODelay = 0.75
  const isMobile = useIsMobile()

  return (
    <Layout>
      <StaticQuery
        query={graphql`
          {
            allWordpressPage(filter: { title: { eq: "Play" } }) {
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
          <>
            <Stickyroll
              pages={[""]}
              factor={2.25}
              onEnd={() => console.log("ENDED")}
              className={styles.play_wrapper_scroller}
            >
              {({ page, pageIndex, pages, progress }) => {
                return (
                  <div style={{ height: "100vh" }}>
                    {/* FOR TESTING AND DEBUGING */}
                    {/* <div style={{ position: "absolute" }}>
                      <strong>{page}</strong> of <strong>{pages}</strong>
                      <br />
                      Progress: <strong>{progress}</strong>
                    </div> */}

                    <div className={styles.play_wrapper}>
                      {/* TOP H3  : Apply scale and tranform aniamtions*/}
                      <div
                        className={`${
                          !isMobile || progress < 1
                            ? styles.top_h3_animation
                            : ""
                        } ${
                          isMobile && progress >= 1
                            ? styles.top_h3_animation_mobile
                            : ""
                        }`}
                        style={
                          isMobile
                            ? {
                                marginTop: "20vh",
                              }
                            : {
                                marginTop: "20vh",

                                transform: `translate3d(0, calc(55vh * ${
                                  progress >= bH3ODelay + 0.1
                                    ? mapRange(progress, 0.86, 1, 0.1, 1)
                                    : 0
                                }),0) scale(${
                                  progress >= bH3ODelay + 0.1
                                    ? mapRange(progress, 0.86, 1, 1, 0.85)
                                    : 1
                                })`,
                              }
                        }
                      >
                        <h3 className={styles.largeWorkTitlePlay}>
                          <WPGBlock
                            block={
                              props.allWordpressPage.edges[0].node.blocks[0]
                            }
                            mapToBlock={GetCustomBlock}
                          />
                          <br />
                          <WPGBlock
                            block={
                              props.allWordpressPage.edges[0].node.blocks[2]
                            }
                            mapToBlock={GetCustomBlock}
                          />
                          {/* REMOVE ELLIPSES */}
                          <span
                            style={{
                              opacity: `${
                                progress <= 0.25 ? 1 : 0.5 - progress
                              }`,
                            }}
                          >
                            ...
                          </span>
                        </h3>
                      </div>

                      {/* BOTTOM H3  */}
                      <div
                        className={styles.play_animation}
                        style={{
                          opacity: `${
                            progress <= bH3ODelay
                              ? 1
                              : bH3ODelay + 0.15 - progress
                          }`,
                          transform: `translate3d(0, calc(40vh - 150vh * ${
                            progress <= 0.5 ? progress : 0.5
                          }),0)`,
                        }}
                      >
                        <h3 className={styles.largeWorkTitlePlay}>
                          <WPGBlock
                            block={
                              props.allWordpressPage.edges[0].node.blocks[4]
                            }
                            mapToBlock={GetCustomBlock}
                          />
                          <br />
                          <WPGBlock
                            block={
                              props.allWordpressPage.edges[0].node.blocks[6]
                            }
                            mapToBlock={GetCustomBlock}
                          />
                        </h3>
                      </div>
                    </div>
                  </div>
                )
              }}
            </Stickyroll>
            <PlayItems />
          </>
        )}
      />
    </Layout>
  )
}

export default PlayPage
