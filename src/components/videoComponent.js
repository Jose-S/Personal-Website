import React, { useState } from "react"
import VimeoPlayer from "react-player/lib/players/Vimeo"
import VisibilitySensor from "react-visibility-sensor"
import styles from "../styles/video.module.scss"

const VideoComponent = ({ src, playOnScroll }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <VisibilitySensor
      onChange={isVisible => {
        setIsPlaying(isVisible)
      }}
      active={playOnScroll}
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
            color: "558BFF", // PRIMARY COOR THEME
            responsive: true,
          }}
        />
      </div>
    </VisibilitySensor>
  )
}

export default VideoComponent
