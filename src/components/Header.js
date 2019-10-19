/**
 * This file creates a header component
 * The header contains the ebsite tile (Jose Saravia)
 * The Main Menu (Both responsive versions)
 */

// ----------- IMPORT -----------

//Boiler
import React, { useState } from "react"
// Components
import { StaticQuery, graphql, Link } from "gatsby"
import SiteInfo from "./SiteInfo"
import Menu from "react-burger-menu/lib/menus/stack"
import { Location } from "@reach/router"
// Styles
import styles from "../styles/header.module.scss"
import "../styles/sidemenu.scss"
import "../styles/hamburger.scss"
import { useIsMobile } from "./Responsive"
import SocialIcon from "./SocialIcon"

const Header = () => {
  const [showHam, setShowHam] = useState(false)
  var isMobile = useIsMobile()

  // Creates the Hamburger Menu
  const hamMenu = () => {
    return (
      // The hamburger icon is shown when it animates, when it is shown the menu
      // sidebar is also shown.
      <div
        className={`hamburger hamburger--spring ${showHam ? "is-active" : ""}`}
        onClick={() => setShowHam(!showHam)}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
    )
  }

  // Toggles the hamburger icon based on the state of theside menu
  // If given a scene it will change the current scene(slug) in the screeen
  /// THis is used to highlight it (Currently not used)
  const toggleMenu = (isOpen, scene = "") => {
    setShowHam(isOpen)
    document.body.style.overflowY = isOpen ? "hidden" : ""
  }

  // Create Mobile menu
  const createMobileMenu = (items, path, props) => {
    let menu = []

    // create items
    items.map((item, index) =>
      menu.push(
        <Link
          to={item.title === "Work" ? "/" : `/${item.object_slug}`}
          key={item.title}
          className={`text--xl ${
            path.includes(item.object_slug) ? "bm-item-active" : ""
          }`}
          id={item.title}
          onClick={() => toggleMenu(!showHam)}
        >
          {item.title}
        </Link>
      )
    )

    // cretae menu  with hamburger icon
    return (
      <>
        <Menu
          onStateChange={newState => toggleMenu(newState.isOpen, path)}
          isOpen={showHam}
          right
          customBurgerIcon={false}
          customCrossIcon={false}
        >
          {menu}
          {getSocialIcons(props)}
        </Menu>
        {hamMenu()}
      </>
    )
  }

  // Creates a list of links representing the menu
  // Map each menu item to a link
  // This is for desktop and tablet viewports
  const createMenu = (items, path) => {
    let menu = []

    items.map((item, index) =>
      menu.push(
        <Link
          to={item.title === "Work" ? "/" : `/${item.object_slug}`}
          key={item.title}
          className={`${styles.menu_item} ${
            path.includes(item.object_slug) ? styles.menu_item_selected : ""
          }`}
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

  // Fetch Menu Items
  return (
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

          allWordpressPage(filter: { title: { eq: "Work" } }) {
            edges {
              node {
                acf {
                  social_media {
                    name
                    link
                    icon {
                      filename
                    }
                  }
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

            <Location>
              {({ location }) => {
                let path = location.pathname
                if (isMobile) {
                  return createMobileMenu(
                    props.allWordpressWpApiMenusMenusItems.edges[0].node.items,
                    path,
                    props
                  )
                } else {
                  return createMenu(
                    props.allWordpressWpApiMenusMenusItems.edges[0].node.items,
                    path
                  )
                }
              }}
            </Location>
          </div>
        </header>
      )}
    />
  )
}

function getSocialIcons(props) {
  console.log("social h: ", props)
  return (
    // Nnot interactive calss ensures the item isnt hoverable

    // Need to override styles aplaid by library, so i added them inline
    <div
      className={`${styles.footer_icon_inner_wrapper} not-interactive`}
      style={{ flex: "1", display: "flex", alignItems: "flex-end" }}
    >
      <div style={{ height: "fit-content" }}>
        {createSocialIcons(
          props.allWordpressPage.edges[0].node.acf.social_media
        )}
      </div>
    </div>
  )
}

// Create an array of <a> tags wth icon links
function createSocialIcons(socialIcons) {
  let icons = []
  socialIcons.forEach((socialIcon, index) => {
    icons.push(
      <SocialIcon
        key={index}
        src={socialIcon.icon.filename}
        name={socialIcon.name}
        profileUrl={socialIcon.link}
        size={"32px"}
      />
    )
  })

  return icons
}

export default Header
