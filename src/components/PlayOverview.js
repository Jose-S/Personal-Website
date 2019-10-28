/**
 * This fle creates a  play project overview componnet. Each Play project has this.
 * It simply informs the user with a summary of the projectt.
 */

// --------- IMPORT ---------

// Header
import React from "react"
// Styles
import styles from "../styles/project-overview.module.scss"

// --------- CODE ---------

const PlayOverview = props => {
  // Get all acf variables
  const { title, acf } = props.props
  const { image, subtitle, overview, challenges, skills, timeline, link } = acf

  return (
    <div>
      {/* PROJECT TILE */}
      <h1 className={styles.overview_title}>
        {title}
        <span className={styles.overview_title_period}>.</span>
      </h1>
      <h3 className={styles.overview_subtitle}>{subtitle}</h3>

      {/* SUBTITLES AND HEADER IMAGE */}
      <div className={styles.split_container}>
        <div>
          <h5 className={styles.overview_label}>Overview</h5>
          <p className={styles.overview_p}>
            {overview}
            {link ? (
              <span>
                <a className={styles.project_link} href={link}>
                  &nbsp;Visit live site
                </a>
              </span>
            ) : (
              <></>
            )}
          </p>
          <h5 className={styles.overview_label}>Challenges</h5>
          <p className={styles.overview_p}>{challenges}</p>
          <h5 className={styles.overview_label}>Skills</h5>
          <p className={styles.overview_p}>{skills}</p>
          <h5 className={styles.overview_label}>Timeline</h5>
          <p className={styles.overview_p}>{timeline}</p>
          {/* <h5 className={styles.overview_label}>Category</h5> */}
          {/* <p className={styles.overview_p}>{category}</p> */}
        </div>
        {/* ANIMATED IMAGE */}
        {image ? (
          <img
            src={image.source_url}
            className={styles.overview_play_img}
            alt="Experiment Overview Media File"
          ></img>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default PlayOverview
