/**
 * This file creates a list of play items to display
 * They are quieried from wordpress
 *
 * Eventhough this is similar to the project items compoonent, I
 * separated it because of potential future implementations
 * in which I can filter the queried play projects.
 */

// Boiler
import React from "react"
import { graphql, StaticQuery } from "gatsby"
// Components
import ProjectItem from "./ProjectItem"
// Styles
import styles from "../styles/project-item.module.scss"

// WP Projects are queried in accending order based on order ACF
const PlayItems = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpExperiment(
            sort: { fields: [acf___order], order: ASC }
          ) {
            edges {
              node {
                id
                title
                slug
                excerpt
                featured_media {
                  source_url
                }
                acf {
                  order
                }
              }
            }
          }
        }
      `}
      render={props => (
        <div className={styles.item_grid}>
          {props.allWordpressWpExperiment.edges.map(playItem => (
            <ProjectItem
              key={playItem.node.id}
              props={playItem.node}
              header={"play"}
            ></ProjectItem>
          ))}
        </div>
      )}
    />
  )
}

export default PlayItems
