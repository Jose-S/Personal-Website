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
import SocialIcon from "./SocialIcon"
// Styles
import styles from "../styles/header.module.scss"
import { useIsMobile } from "./Responsive"

// ----------- CODE -----------

const Footer = (isHome = false) => {
  var isMobile = useIsMobile()
  // Fetch Menu Items
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressPage(filter: { title: { eq: "Work" } }) {
            edges {
              node {
                acf {
                  contact_description
                  signature
                  contact_email
                  email_subject
                  email_body
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
        <footer
          className={styles.footer_wrapper}
          style={isHome ? { margin: "16px 0px" } : {}}
        >
          {createContact(props.allWordpressPage.edges[0].node.acf, isMobile)}
          {createSignature(props.allWordpressPage.edges[0].node.acf)}
        </footer>
      )}
    />
  )
}

// Create Bottom Copyrigth signature
function createSignature(data) {
  return (
    <div className={styles.footer_bottom_inner_wrapper}>
      <small
        className="text--xs-subtitle-two "
        dangerouslySetInnerHTML={{
          __html: data.signature,
        }}
      />
      <small className="text--xxs-caption">
        © {new Date().getFullYear()} Jose Saravia. All Rights Reserved.
      </small>
    </div>
  )
}

// Create Cotact info footer section
function createContact(data, isMobile) {
  console.log("FOOTER", data.social_media[0].icon.source_url)
  return (
    <div className={styles.footer_top_inner_wrapper}>
      <div>
        <p
          className={`${isMobile ? "" : "text--xs-body-two"} ${
            styles.footer_contact
          }`}
        >
          {data.contact_description}
          <br />
          <span>
            Email me at {/* Add an Email Link */}
            <a
              className={styles.site_link}
              href={`mailto:${data.contact_email}?subject=${data.email_subject}&body=${data.email_body}`}
            >
              {data.contact_email}
            </a>
          </span>
        </p>
      </div>
      {/* Add Social Media Icon Links */}
      {!isMobile ? (
        <div className={styles.footer_icon_inner_wrapper}>
          {createSocialIcons(data.social_media)}
        </div>
      ) : (
        <></>
      )}
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
      />
    )
  })

  return icons
}

export default Footer
