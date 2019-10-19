/**
 * Creates a Process Nav Bar item tha lnk to the specific process header
 * This component takes in an icon and a name for the process
 */

// ------ IMPORT ------
// Boiler
import React from "react"
// Components
// Not the Gatsby Link Component
import { Link } from "react-scroll"
import Icon from "./IconSvg"
// Styles
import styles from "../styles/process-nav-bar.module.scss"
import { useIsMobile } from "./Responsive"

// ------ CODE ------

const ProcessNavItem = ({ name, icon }) => {
  // For Responsive desisgn
  var isMobile = useIsMobile()

  return (
    <Link to={name} smooth={true} className={styles.nav_item_wrapper}>
      <div className={styles.nav_item_box}>
        <Icon src={icon.filename} size={isMobile ? "32px" : "64px"} />
        <p
          className={`${styles.nav_item_label}, ${
            isMobile ? "" : "text--xs-body-two"
          }`}
          style={{ margin: "0px", marginLeft: isMobile ? "16px" : "0px" }}
        >
          {name}
        </p>
      </div>
    </Link>
  )
}

export default ProcessNavItem
