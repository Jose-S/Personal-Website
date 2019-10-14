/**
 * This file creates a header component
 * The header contains the ebsite tile (Jose Saravia)
 * The Main Menu (Both responsive versions)
 */

// ----------- IMPORT -----------

//Boiler
import React from "react"
// Components
import { StaticQuery, graphql, Link } from "gatsby"
import SiteInfo from "./SiteInfo"
// Styles
import styles from "../styles/header.module.scss"

const Header = () => (
  // Fetch Menu Items
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(
          filter: { name: { eq: "Main Menu" } }
        ) {
          edges {
            node {
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `}
    render={props => (
      <header className={styles.main_menu_wrapper}>
        <div className={styles.main_menu_inner}>
          <SiteInfo />

          {createMenu(
            props.allWordpressWpApiMenusMenusItems.edges[0].node.items
          )}
        </div>
      </header>
    )}
  />
)

// Creates a list of links representing the menu
// Map each menu item to a link
// This is for desktop and tablet viewports
function createMenu(items) {
  let menu = []

  items.map((item, index) =>
    menu.push(
      <Link
        to={item.title === "Work" ? "/" : `/${item.object_slug}`}
        key={item.title}
        className={styles.menu_item}
        style={
          index ===
          //  Last menu item had not right spacing
          items.length - 1
            ? { marginRight: "0", paddingRight: ".25em" }
            : {}
        }
      >
        {item.title}
      </Link>
    )
  )
  return menu
}

export default Header
