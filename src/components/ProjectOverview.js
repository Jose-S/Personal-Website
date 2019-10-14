/**
 * This fle creates a project overive componnet. Each Work project has this. It simply
 * informs the user witha summary of the project and acces to a nav bar for navigation
 */

// --------- IMPORT ---------

// Header
import React from "react"
// Styles
import styles from "../styles/project-overview.module.scss"

// --------- CODE ---------

const ProjectOverview = props => {
  // Get all acf variables
  const { title, acf } = props.props
  const { subtitle, overview, challenges, roles, timeline, ui_gif } = acf

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
          <p className={styles.overview_p}>{overview}</p>
          <h5 className={styles.overview_label}>Challenges</h5>
          <p className={styles.overview_p}>{challenges}</p>
          <h5 className={styles.overview_label}>Roles</h5>
          <p className={styles.overview_p}>{roles}</p>
          <h5 className={styles.overview_label}>Timeline</h5>
          <p className={styles.overview_p}>{timeline}</p>
        </div>

        {/* ANIMATED IMAGE */}
        <img
          src={ui_gif.source_url}
          className={styles.overview_img}
          alt="Project Overview Media File"
        ></img>
      </div>
    </div>
  )
}

export default ProjectOverview
