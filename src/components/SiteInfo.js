import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styles from "../styles/header.module.scss"

const SiteInfo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
            }
          }
        }
      }
    `}
    render={props => (
      <div className={styles.site_info_wrapper}>
        {props.allWordpressSiteMetadata.edges[0].node.name}
      </div>
    )}
  />
)

export default SiteInfo
