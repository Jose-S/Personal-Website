import React, { Component } from "react"
import ProcessNavItem from "./ProcessNavItem"
import styles from "../styles/process-nav-bar.module.scss"

// Image not hoverable since it is under text
// This bug was fixed by adding hover state variable to the componnet
// This variable is set based on the top most z-index element hover state
// when the stat eis updated the whole componnet is re - rendered

class ProcessNavBar extends Component {
  state = {
    animate: false,
  }

  toggleAnimate = () => {
    this.setState({ animate: !this.state.animate })
  }

  createNavItems(items) {
    let group = []
    items.forEach((item, index) => {
      group.push(
        <ProcessNavItem name={item.name} icon={item.image} key={index} />
      )
    })
    return group
  }

  render() {
    const processItems = this.props.props
    return (
      <>
        <div className={styles.nav_item_bar_wrapper}>
          {this.createNavItems(processItems)}
        </div>
        <button onClick={this.toggleAnimate}>Click Me</button>
      </>
    )
  }
}

export default ProcessNavBar
