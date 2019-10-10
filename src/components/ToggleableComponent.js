import React, { Component } from "react"
import Toggle from "react-toggle"
import "../styles/Global/toggle-react.scss"
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

    console.log("MAIN", mainComponent)

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
            this.state.divHeight !== 0
              ? { height: `${this.state.divHeight}px` }
              : {}
          }
          className={sizeClass}
          ref={input => (this.divElement = input)}
        >
          <div className={styles.components_wrapper}>
            {/* <LazyLoadComponent placeholder={<MyLoader />}> */}
            <div
              className={`${styles.main_component_wrapper} ${
                !this.state.toggle ? styles.fadeIn : styles.fadeOut
              }`}
            >
              {mainComponent}
            </div>
            {/* </LazyLoadComponent> */}
            {/* {!this.state.toggle && mainComponent} */}
            {/* <LazyLoadComponent placeholder={<MyLoader />}> */}
            <div
              className={`${styles.toggle_component_wrapper} ${
                this.state.toggle ? styles.fadeIn : styles.fadeOut
              }`}
            >
              {toggledComponent}
            </div>
            {/* </LazyLoadComponent> */}
          </div>
        </div>
      </div>
    )
  }
}
export default ToggleableComponent
