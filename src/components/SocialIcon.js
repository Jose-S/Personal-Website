/**
 *  This file creates a social media icon
 *  A socail media icon is clickable and
 *  navigates you to my profile on the
 *  respective social media platform
 */

// ----------- IMPORT -----------

//Boiler
import React from "react"
// Components
import Icon from "./IconSvg"
// Styles
import Tippy from "@tippy.js/react"

// ----------- CODE -----------

const SocialIcon = ({ src, name = "", profileUrl = "", size = "24px" }) => {
  return (
    <Tippy
      content={name}
      placement="top"
      animation="scale"
      theme="google"
      animateFill={false}
      duration={[250, 175]}
      delay={[250, 0]}
      distance={16}
    >
      <a href={profileUrl}>
        <Icon src={src} size={size}></Icon>
      </a>
    </Tippy>
  )
}

export default SocialIcon
