/**
 * This page creates the home page
 * TODO: MAJOR REFACTORING AND LAYOUT CHANGES
 * WILL INCORPORATE ANIMATION
 *
 * FOR ANIMATION TO WORK: Styles must override everything else. This
 * is why im using in-line styles (easiest solution)
 */
import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
// import WPGBlocks from "react-gutenberg"
import { WPGBlock } from "react-gutenberg"
import GetCustomBlock from "../components/blocks"
import styles from "../styles/large-title.module.scss"
import ProjectItems from "../components/ProjectItems"
import {
  useIsDesktop,
  useIsMobile,
  useIsTablet,
} from "../components/Responsive"
import HomeIndexPage from "../components/homeDesktop"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import HomeIndexPageMobile from "../components/homeMobile"
import window from "global"

const IndexPage = () => {
  var isDesktop = useIsTablet()

  console.log("ITS A DESKTOP: ", isDesktop)
  if (!isDesktop) {
    console.log("ITS A DESKTOP")
    return <HomeIndexPage />
  } else if (isDesktop) {
    console.log("ITS NOT A DESKTOP")
    return <HomeIndexPageMobile />
  }
}

export default IndexPage
