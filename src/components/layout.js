/**
 * Layout component that creates a header, main, and footer section
 * Higher-order component that accepts child components
 */

// ----------- IMPORT -----------

// Boiler
import React from "react"
import PropTypes from "prop-types"
// Components
import Header from "./Header"
import Footer from "./Footer"
// Styles
import "../styles/Global/layout.scss"

// ----------- CODE -----------

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
