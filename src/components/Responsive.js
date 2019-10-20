/**
 * This file contains functions used to calcualte the screen width of the
 * device using JS. THis is used to change the JSX code returned from certain components.
 *
 * Uses an effect hook to add coponentWillMount and other
 * state methods to a functional component
 *
 * HELPS IN CREATING RESPONSIVE LAYOUTS
 */

import { useState, useEffect } from "react"
import throttle from "lodash.throttle"
import window from "global"

const REFRESH_RATE = Math.round(1000 / 3)
const MOBILE_SIZE = 480
const TABLET_SIZE = 1023
const DESKTOP_SIZE = 1024

/**
 *
 * Determines if the given screen resolution width is achieved.
 *
 * @param {*} screenRes The max resolution width
 * @returns True if the screenRes is achieved (< screenRes)
 */
export function useWindowWidth(screenRes) {
  const [windowWidth, setWindowWidth] = useState(isScreenSize(screenRes))

  // Only updates every REFRESH_RATE
  const throttleHandleWindowResize = throttle(() => {
    setWindowWidth(isScreenSize(screenRes))
  }, REFRESH_RATE)

  // SImilar to componentDidMount and componentDidUpdate
  useEffect(() => {
    window.addEventListener("resize", throttleHandleWindowResize)
    // Specify how to clean up after this effect:
    // SImilar to componentWillUnmount
    return () =>
      window.removeEventListener("resize", throttleHandleWindowResize)
  }, [])

  return windowWidth
}

function isScreenSize(screenRes) {
  if (screenRes === DESKTOP_SIZE) {
    // Use Min instead of Max
    return window.innerWidth >= screenRes
  } else {
    return window.innerWidth < screenRes
  }
}

// custom React Hook functions

export const useIsMobile = () => {
  return useWindowWidth(MOBILE_SIZE)
}

export const useIsTablet = () => {
  return useWindowWidth(TABLET_SIZE)
}
export const useIsDesktop = () => {
  return useWindowWidth(DESKTOP_SIZE)
}

// export default { useIsMobile, useIsTablet, useIsDesktop}
