import React, { Component } from "react"
import Toggle from "react-toggle"
import "../styles/global/toggle-react.scss"
import styles from "../styles/toggle-component.module.scss"
import Tippy from "@tippy.js/react"
import "tippy.js/themes/google.css"

class ToggleableComponent extends Component {
  static defaultProperties = {
    hideTitle: false,
  }

  state = {
    toggle: false,
    divHeight: 0,
  }

  toggleClick = () => {
    // Update Height of Component
    this.setState({ divHeight: this.divElement.clientHeight })
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    const {
      title,
      mainComponent,
      toggledComponent,
      hideTitle,
      sizeClass,
    } = this.props

    return (
      <div className={styles.container_wrapper}>
        <div className={styles.title_wrapper}>
          {hideTitle ? <></> : <h4 className={styles.title}>{title}</h4>}

          <Tippy
            content={
              this.state.toggle
                ? "Toggle to view digital"
                : "Toggle to view original"
            }
            placement="top"
            animation="scale"
            theme="google"
            animateFill={false}
            duration={[250, 175]}
            delay={[1000, 0]}
            distance={16}
          >
            <div className={styles.toggle_wrapper}>
              <Toggle
                defaultChecked={this.state.toggle}
                onChange={this.toggleClick}
              />
            </div>
          </Tippy>
        </div>
        <div
          style={
            this.state.divHeight != 0
              ? { height: `${this.state.divHeight}px` }
              : {}
          }
          className={sizeClass}
          ref={input => (this.divElement = input)}
        >
          {!this.state.toggle && mainComponent}
          {this.state.toggle && toggledComponent}
        </div>
      </div>
    )
  }
}
export default ToggleableComponent
