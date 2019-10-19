/**
 * This component creates the site info header section
 * that displays the site title (Jose Saravia) and the
 * description is randomly selected from three options
 *    -- Back to home
 *    -- Person you are thinking about :)
 *    -- My Portfolio Site
 */

// ----------- IMPORT -----------

// Boiler
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
// Components
import Tippy from "@tippy.js/react"
// Styles
import styles from "../styles/header.module.scss"
import { useIsMobile } from "./Responsive"

const SiteInfo = () => {
  const isMobile = useIsMobile()

  return (
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
          <Tippy
            content={getTippyString(
              props.allWordpressSiteMetadata.edges[0].node.description
            )}
            placement="bottom"
            animation="scale"
            theme="google"
            animateFill={false}
            duration={[250, 175]}
            delay={[1000, 0]}
            distance={16}
          >
            <Link to="/" className={styles.site_name}>
              {getTitle(
                props.allWordpressSiteMetadata.edges[0].node.name,
                isMobile
              )}
            </Link>
          </Tippy>
        </div>
      )}
    />
  )
}
// Get string to use for tooltip
function getTippyString(str) {
  let strings = str.split(",")
  return strings[Math.floor(Math.random() * strings.length)]
}

const getTitle = (title, mobile) => {
  if (mobile) {
    let strList = title.split(" ")
    let abbr = ""
    strList.forEach(str => (abbr += str[0]))
    return abbr
  } else {
    return title
  }
}

// Just here for consistency
SiteInfo.propTypes = {}
SiteInfo.defaultProps = {}

export default SiteInfo
