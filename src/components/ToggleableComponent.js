/**
 * This id a higher-order component used to toggle between two components
 * These componnets should be of the same type (not necessary, but has not
 * been tested for different types)
 *
 * TOOD: CHANGE TO FUNCTIONAL COMPONENT WITH HOOKS
 */

// ----------- IMPORT -----------

// Boiler
import React, { Component } from "react"
// Component
import Toggle from "react-toggle"
import Tippy from "@tippy.js/react"
// Style
import "../styles/Global/toggle-react.scss"
import styles from "../styles/toggle-component.module.scss"

// ----------- CODE -----------

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

    console.log("MAIN", mainComponent)

    return (
      <div className={styles.container_wrapper}>
        {/* Title and toggle button */}
        <div className={styles.title_wrapper}>
          {hideTitle ? <></> : <h4 className={styles.title}>{title}</h4>}

          {/* Toggle tooltip description */}
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
            delay={[500, 0]}
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

        {/* Wrapper div ensures that while toggling the
         height of the component is not equal to 0 for a brief second.
         This fixes a component shrink on toggle bug*/}
        <div
          style={
            this.state.divHeight !== 0
              ? { height: `${this.state.divHeight}px` }
              : {}
          }
          className={sizeClass}
          ref={input => (this.divElement = input)}
        >
          {/* Wraps both components by stacking them and only showing them if toggled */}
          <div className={styles.components_wrapper}>
            {/* Main view facing element */}
            <div
              className={`${styles.main_component_wrapper} ${
                !this.state.toggle ? styles.fadeIn : styles.fadeOut
              }`}
            >
              {mainComponent}
            </div>

            {/* Toggle view component */}
            <div
              className={`${styles.toggle_component_wrapper} ${
                this.state.toggle ? styles.fadeIn : styles.fadeOut
              }`}
            >
              {toggledComponent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ToggleableComponent
