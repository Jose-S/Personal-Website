/* This File controls the template for a any page that is under construction. 
This file is important nd dynamically creates any under construction page.
If this file is edited add an important tag to the commit!*/

// ---------------- IMPORT ----------------------

// LIBRARIES
import React from "react"
// COMPONENTS
import Layout from "../components/layout"

// ---------------- CODE ----------------------
export default ({ pageContext }) => <Layout>{getPage(pageContext)}</Layout>

function getPage(pageContext) {
  return <h2>{`${pageContext.title} Under Construction 🚧`}</h2>
}
