import React, { Component } from "react"
import styles from "../styles/project-item.module.css"
import Tippy from "@tippy.js/react"

// Import the Google theme from tippy.js
import "tippy.js/themes/google.css"
import { Link } from "gatsby"

// Image not hoverable since it is under text
// This bug was fixed by adding hover state variable to the componnet
// This variable is set based on the top most z-index element hover state
// when the stat eis updated the whole componnet is re - rendered

class ProjectItem extends Component {
  state = {
    hover: false,
  }

  // Set Hover State of ProjectItem
  toggleHover = () => {
    this.setState({ hover: !this.state.hover })
  }

  render() {
    const { title, featured_media, excerpt, slug } = this.props.props

    return (
      <Tippy
        content={`Click to view ${title}`}
        placement="bottom"
        animation="scale"
        theme="google"
        animateFill={false}
        duration={[250, 175]}
        delay={[1000, 0]}
        distance={16}
      >
        <Link to={`/work/${slug}`}>
          <div className={styles.container}>
            <img
              className={
                this.state.hover ? styles.thumbnail_hover : styles.thumbnail
              }
              src={featured_media.source_url}
              alt={title}
            />
            <h4
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}
              className={styles.exceprt}
            >
              {excerpt.replace("<p>", "").replace("</p>", "")}
            </h4>
          </div>
        </Link>
      </Tippy>
    )
  }
}

export default ProjectItem
