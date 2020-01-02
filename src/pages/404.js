/**
 * This page creates a 404 page
 */

import React from "react"
import SEO from "../components/seo"
import styles from "../styles/404-page.module.scss"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className={styles.error_container_wrapper}>
      <div>
        <h2 className={styles.error_text_line}>Ooooooooops...</h2>
        <h2 className={styles.error_text_line}>You hit a page...</h2>
        <h2 className={styles.error_text_line}>It doesn&#39;t exist...</h2>
        <h2 className={styles.error_text_line}>The sadness. 😭</h2>
        <a
          className={`text--xxl ${styles.error_link}`}
          href="https://www.josesaravia.design"
        >
          Please save me!
        </a>
      </div>
    </div>
  </>
)

export default NotFoundPage
