/**
 * This file creates a video component that plays a video on scroll
 * This takes in a source for the video and wheather or not the
 * componnet plays on scroll
 *
 * If component is not played on scroll,
 * then the user has access to video controls
 */

// ----------- IMPORT -----------

// Boiler
import React, { useState } from "react"
// Components
import VimeoPlayer from "react-player/lib/players/Vimeo"
// Sensors
import VisibilitySensor from "react-visibility-sensor"
// Styles
import styles from "../styles/video.module.scss"

const VideoComponent = ({ src, playOnScroll }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    // Component detects if its visible
    <VisibilitySensor
      onChange={isVisible => {
        setIsPlaying(isVisible)
      }}
      active={playOnScroll}
      minTopValue={250}
    >
      <div className={styles.player_wrapper}>
        <VimeoPlayer
          url={src}
          className={styles.react_player}
          width="100%"
          height="100%"
          volume={playOnScroll ? 0 : 0.5}
          muted={playOnScroll}
          playing={isPlaying}
          loop={playOnScroll}
          pip={false}
          controls={!playOnScroll}
          playerOptions={{
            responsive: true,
          }}
        />
      </div>
    </VisibilitySensor>
  )
}

export default VideoComponent
