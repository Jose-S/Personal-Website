import React, { Component } from "react"
import styles from "../styles/project-overview.module.scss"
// import styles from "../styles/project-item.module.css"

// Image not hoverable since it is under text
// This bug was fixed by adding hover state variable to the componnet
// This variable is set based on the top most z-index element hover state
// when the stat eis updated the whole componnet is re - rendered

class ProjectOverview extends Component {
  state = {}

  render() {
    const { title, acf } = this.props.props
    const { subtitle, overview, challenges, roles, timeline, ui_gif } = acf

    console.log("UI GIF", ui_gif)
    return (
      <div>
        <h1 className={styles.overview_title}>{`${title}.`}</h1>
        <h3 className={styles.overview_subtitle}>{subtitle}</h3>

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

          <img src={ui_gif.source_url} className={styles.overview_img}></img>
        </div>
      </div>
    )
  }
}

export default ProjectOverview
