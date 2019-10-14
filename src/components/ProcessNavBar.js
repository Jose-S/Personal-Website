/**
 * This file creates a nav bar componnet for navigating through the
 * case study. THis alllows users to quickly navigate to parts they are interested on
 * Useful if the user is trying to ickly view the case study
 *
 * TODO: ANIMATE SIDE BAR TO THE ISDE WHEN THE USER SCROLLS PAST ITS INITIAL SATE
 */

// ------ IMPORT ------
// Boiler
import React, { Component } from "react"
// Components
import ProcessNavItem from "./ProcessNavItem"
// Styles
import styles from "../styles/process-nav-bar.module.scss"

// ------ CODE ------

const ProcessNavBar = props => {
  const processItems = props.props
  // Create nav items
  var createNavItems = items => {
    let group = []
    items.forEach((item, index) => {
      group.push(
        <ProcessNavItem name={item.name} icon={item.image} key={index} />
      )
    })
    return group
  }

  return processItems !== null ? (
    <>
      <div className={styles.nav_item_bar_wrapper}>
        {createNavItems(processItems)}
      </div>
    </>
  ) : (
    <></>
  )
}

export default ProcessNavBar
