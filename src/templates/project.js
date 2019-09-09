import React from "react"
import Layout from "../components/layout"

export default ({ pageContext }) => (
  <Layout>
    {console.log("IM MAKING A PROJECT")}
    <h2>{`${pageContext.title} Under Construction`}</h2>
  </Layout>
)
