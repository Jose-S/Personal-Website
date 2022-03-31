/**
 * This File creates a play page.
 *
 * A play page contains all types of projects.
 * These projects are shorter and less structured.
 * The whole design process isn't followed.
 *
 * THESE ARE NOT CASE STUDIES
 *
 */

 import React from "react"
 import { StaticQuery, graphql } from "gatsby"
 import Layout from "../components/layout"
 // import Image from "../components/image"
 // import SEO from "../components/seo"
 import WPGBlocks from "react-gutenberg"
//  import { WPGBlocks } from "react-gutenberg"
 import GetCustomBlock from "../components/blocks"
 
 import styles from "../styles/large-title.module.scss"
 import "../styles/Global/layout.scss"
 

 import { useIsMobile } from "../components/Responsive"

 

 // Uses the distance that has been scrolled to calculate
 // The transisition and opacity value sof certain elements
 const AboutPage = () => {

   const isMobile = useIsMobile()
 
   return (
     <Layout>
       <StaticQuery
         query={graphql`
           {
             allWordpressPage(filter: { title: { eq: "About" } }) {
               edges {
                 node {
                   id
                   slug
                   title
                   blocks {
                     blockName
                     innerHTML
                     attrs {
                       inline_text
                       controler
                       blockId
                       blockUniqueClass
                     }
                   }
                 }
               }
             }
           }
         `}
         render={props => {
            console.log("ALL PROPS")
            console.log(props.allWordpressPage.edges[0].node.blocks)
            return (
                <div className={styles.content_container}>
                  <WPGBlocks
                    blocks={props.allWordpressPage.edges[0].node.blocks}
                    mapToBlock={GetCustomBlock}
                  ></WPGBlocks>
                </div>
            )
         }
        }
       />
     </Layout>
   )
 }
 
 export default AboutPage
