import React, { useRef, useState, useLayoutEffect, useEffect } from "react"
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion"
import throttle from "lodash.throttle"
import window from "global"

const calculateMinHeight = (height, range) => {
  return height + height * range
}

const rand = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (+max - +min)) + +min
}

export default function ParallaxItem({
  children,
  className,
  topOffset = -406,
  bottomOffset = 406,
  range = 1,
}) {
  const { scrollY } = useViewportScroll()
  const ref = useRef()
  const [minHeight, setMinHeight] = useState("auto")
  const [elementTop, setElementTop] = useState(0)
  const springConfig = {
    damping: 100,
    stiffness: 100,
    mass: rand(1, 3),
  }

  const throttleHandleWindowResize = throttle(() => {
    console.log("REF RESIZE: ", ref.current, ref.current.offsetTop)
    setElementTop(ref.current.offsetTop)
    setMinHeight(calculateMinHeight(ref.current.offsetHeight, range))
    console.log("REF RESIZE: ", minHeight, " ", elementTop)
  }, 250)

  useEffect(() => {
    console.log("REF: ", ref)
    if (!ref.current) return

    throttleHandleWindowResize()
    window.addEventListener("resize", throttleHandleWindowResize)
    return () =>
      window.removeEventListener("resize", throttleHandleWindowResize)
  }, [ref, range])

  //   useEffect(() => {
  //     console.log("REF USE EFFECT ", ref)
  //   }, [])

  const y = useSpring(
    useTransform(
      scrollY,
      [elementTop + topOffset, elementTop + bottomOffset],
      ["0%", `${range * 100}%`]
    ),
    springConfig
  )

  return (
    <div style={{ minHeight }} className={className}>
      <motion.div
        ref={ref}
        initial={{ y: 0 }}
        style={{ y }}
        onClick={() =>
          console.log(
            "REF TOUCHED: ",
            minHeight,
            " ",
            elementTop,
            " ",
            y.get(),
            " ",
            scrollY.get()
          )
        }
      >
        {children}
        {y.get()}
        {elementTop}
        <br />
        {minHeight}
      </motion.div>
    </div>
  )
}
