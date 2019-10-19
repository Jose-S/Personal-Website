/**
 * This File contains a video component
 * The video is played on hover and can
 * be clicked to open a modal with the video
 *
 * The componnet takes in:
 *   - A src of the video (Must be Vimeo Video)
 *   - The src of the placeholder image (For lazyloading)
 *   = A boolean that decided if the video opens a modal with more details
 *   - Title and Captions of the vdeo
 */

// ----------- IMPORT -----------
// Boiler
import React, { useState } from "react"
// Components
import VimeoPlayer from "react-player/lib/players/Vimeo"
import Modal from "react-responsive-modal"
import LazyLoad from "react-lazy-load"
import LoadingImage from "./LoadingImage"
// Styles
import stylesVid from "../styles/video.module.scss"
import styles from "../styles/image-dialog.module.scss"
import { useIsMobile } from "./Responsive"

// ----------- CODE -----------

const HoverVideo = ({
  src,
  placeholderSrc = "",
  hasDialog = false,
  title = "",
  caption = "",
}) => {
  console.log("VID SOURCE", placeholderSrc)
  const [openDialog, setOpenDialog] = useState(false)
  const [isHovered, setIsHover] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  var isMobile = useIsMobile()

  var toggleHover = () => {
    setIsHover(!isHovered)
  }

  var toggleDialog = () => {
    setOpenDialog(true)
  }

  var createVideo = (src, insideModal) => {
    var height = insideModal ? {} : { height: "100%" }
    return (
      <VimeoPlayer
        url={src}
        width="100%"
        {...height}
        className={insideModal ? stylesVid.hover_react_player : ""}
        volume={insideModal ? 0.5 : 0}
        muted={!insideModal}
        playing={insideModal ? true : isHovered}
        loop={true}
        pip={false}
        controls={insideModal}
        onReady={insideModal ? () => {} : () => setIsLoading(false)}
      />
    )
  }

  return (
    <>
      {/* Lazy Loaded Video. It has div over it to allow hover
     states on the video. Uses a loadng image to display as the video loads */}
      <div
        className={styles.images_wrapper}
        style={{ display: "inline-block", marginBottom: "0px" }}
      >
        <LoadingImage
          src={placeholderSrc}
          srcClassName={isLoading ? styles.fadeIn : styles.fadeOut}
          positionClass={styles.inner_loading_image}
        ></LoadingImage>

        <LazyLoad
          offsetVertical={1500}
          className={styles.image_stacker__bottom}
        >
          <div
            className={stylesVid.hover_player_wrapper}
            style={{
              visibility: isLoading ? "hidden" : "visible",
              width: "100%",
              height: "100%",
            }}
          >
            {createVideo(src, false)}
            <div
              className={stylesVid.hover_video_pointer_area}
              onClick={toggleDialog}
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
            ></div>
          </div>
        </LazyLoad>
      </div>
      {/* Video Modal. NEED TO MAKE VIDEO LOAD WITH A PLACEHOLDER */}
      {hasDialog ? (
        <Modal
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          center={true}
          animationDuration={500}
          classNames={{
            modal: styles.video_modal_wrapper,
            transitionEnter: styles.transitionEnter,
            transitionEnterActive: styles.transitionEnterActive,
            transitionExit: styles.transitionExitActive,
            transitionExitActive: styles.transitionExitActive,
          }}
        >
          <div className={styles.modal_content_wrapper}>
            <h4 className={styles.modal_title}>{title}</h4>
            <div
              className={styles.modal_image_wrapper}
              style={{ width: "100%" }}
            >
              {createVideo(src, true)}
            </div>
            <p>{caption}</p>
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </>
  )
}

export default HoverVideo
