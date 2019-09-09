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
        <h1>{`${title}.`}</h1>
        <h3>{subtitle}</h3>

        <div className={styles.split_container}>
          <div>
            <h5>Overview</h5>
            <p>{overview}</p>
            <h5>Challenges</h5>
            <p>{challenges}</p>
            <h5>Roles</h5>
            <p>{roles}</p>
            <h5>Timeline</h5>
            <p>{timeline}</p>
          </div>

          <img src={ui_gif.source_url}></img>
        </div>
      </div>
    )
  }
}

export default ProjectOverview
