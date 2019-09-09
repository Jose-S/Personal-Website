import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import ProjectItem from "./ProjectItem"
import styles from "../styles/project-item.module.scss"

const ProjectItems = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpProject {
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
          {props.allWordpressWpProject.edges.reverse().map(projectItem => (
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
