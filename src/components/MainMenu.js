import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
// import styled from "styled-components"
import SiteInfo from "./SiteInfo"
import styles from "../styles/header.module.css"

// const MainMenuWrapper = styled.div`
//   display: flex;
//   background-color: rgb(3, 27, 77);
// `

// const MainMenuInner = styled.div`
//   max-width: 960px;
//   margin: 0 auto;
//   display: flex;
//   width: 960px;
//   height: 100%;
// `

// const MenuItem = styled(Link)`
//   color: white;
//   display: block;
//   padding: 0px 16px;
// `

const MainMenu = () => (
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
      <div className={styles.main_menu_wrapper}>
        <div className={styles.main_menu_inner}>
          <SiteInfo />
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
            (item, index) => (
              <Link
                to={item.title == "Work" ? "/" : `/${item.object_slug}`}
                key={item.title}
                className={styles.menu_item}
                style={
                  index ==
                  //  Last menu item had not right spacing
                  props.allWordpressWpApiMenusMenusItems.edges[0].node.items
                    .length -
                    1
                    ? { marginRight: "0", paddingRight: ".25em" }
                    : {}
                }
              >
                {item.title}
              </Link>
            )
          )}
        </div>
      </div>
    )}
  />
)

export default MainMenu
