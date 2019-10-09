import React from "react"
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"
import styles from "../styles/process-nav-bar.module.scss"

const ProcessNavItem = ({ name, icon }) => {
  return (
    <Link to={name} smooth={true} className={styles.nav_item_wrapper}>
      <div>
        <img
          src={icon.source_url}
          alt={icon.alt_text}
          className={styles.nav_item_icon}
        />
        <p className={`${styles.nav_item_label}, text--xs-body-two`}>{name}</p>
      </div>
    </Link>
  )
}

export default ProcessNavItem
