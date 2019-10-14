/**
 * This file creates a list of project items to display
 * They are quieried from wordpress
 */

// Boiler
import React from "react"
import { graphql, StaticQuery } from "gatsby"
// Components
import ProjectItem from "./ProjectItem"
// Styles
import styles from "../styles/project-item.module.scss"

// WP Projects are queried in accending order based on order ACF
const ProjectItems = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpProject(sort: { fields: [acf___order], order: ASC }) {
            edges {
              node {
                id
                title
                slug
                excerpt
                featured_media {
                  source_url
                }
              }
            }
          }
        }
      `}
      render={props => (
        <div className={styles.item_grid}>
          {props.allWordpressWpProject.edges.map(projectItem => (
            <ProjectItem
              key={projectItem.node.id}
              props={projectItem.node}
            ></ProjectItem>
          ))}
        </div>
      )}
    />
  )
}

export default ProjectItems
