import React, { useState } from "react"
import VimeoPlayer from "react-player/lib/players/Vimeo"
import stylesVid from "../styles/video.module.scss"
import Modal from "react-responsive-modal"
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from "../styles/image-dialog.module.scss"
import LazyLoad from "react-lazy-load"
import LoadingImage from "./LoadingImage"

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

  var toggleHover = () => {
    setIsHover(!isHovered)
  }

  var toggleDialog = () => {
    setOpenDialog(true)
  }

  //   return (
  //     <VimeoPlayer
  //       width={"100%"}
  //       height={"100%"}
  //       url={src}
  //       // wrapper={<span></span>}
  //       onReady={() => setIsLoading(false)}
  //     ></VimeoPlayer>
  //   )

  return (
    <>
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
          offsetVertical={1000}
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
            <VimeoPlayer
              width={"100%"}
              height={"100%"}
              url={src}
              playing={isHovered}
              volume={0}
              muted={true}
              loop={true}
              pip={false}
              controls={false}
              onReady={() => setIsLoading(false)}
            ></VimeoPlayer>
            <div
              className={stylesVid.hover_video_pointer_area}
              onClick={toggleDialog}
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
            ></div>
          </div>
        </LazyLoad>
      </div>
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
          <div className={styles.modal_image_wrapper} style={{ width: "80%" }}>
            <VimeoPlayer
              url={src}
              width="100%"
              className={stylesVid.hover_react_player}
              volume={0.5}
              muted={true}
              playing={true}
              loop={true}
              pip={false}
              controls={true}
            />
          </div>
          <p>{caption}</p>
        </div>
      </Modal>
    </>
  )
  //   return (
  //     //  <div width="50%">
  //     <>
  //       <div
  //         className={styles.images_wrapper}
  //         styles={{ marginBottom: "0px", overflow: "none" }}
  //       >
  //         <LoadingImage
  //           src={placeholderSrc}
  //           srcClassName={isLoading ? stylesVid.fadeIn : stylesVid.fadeOut}
  //           positionClass={styles.inner_loading_image}
  //         ></LoadingImage>

  //         <LazyLoad
  //           offsetVertical={500}
  //           width="100%"
  //           //  onContentVisible={() => setIsLoading(false)}
  //           className={stylesVid.image_stacker__bottom}
  //         >
  //           <div
  //             className={stylesVid.hover_player_wrapper}
  //             style={{ display: isLoading ? "none" : "block" }}
  //           >
  //             <VimeoPlayer
  //               light={placeholderSrc}
  //               url={src}
  //               className={stylesVid.hover_react_player}
  //               volume={0}
  //               width="100%"
  //               height="100%"
  //               muted={true}
  //               playing={isHovered}
  //               loop={true}
  //               pip={false}
  //               controls={false}
  //               playerOptions={{
  //                 color: "558BFF", // PRIMARY COLOR THEME
  //                 responsive: true,
  //               }}
  //               onReady={() => setIsLoading(false)}
  //             />
  //             <div
  //               className={stylesVid.hover_video_pointer_area}
  //               onClick={toggleDialog}
  //               onMouseEnter={toggleHover}
  //               onMouseLeave={toggleHover}
  //             ></div>
  //           </div>
  //         </LazyLoad>
  //       </div>

  //       <Modal
  //         open={openDialog}
  //         onClose={() => setOpenDialog(false)}
  //         center={true}
  //         animationDuration={500}
  //         classNames={{
  //           modal: styles.modal_wrapper,
  //           transitionEnter: styles.transitionEnter,
  //           transitionEnterActive: styles.transitionEnterActive,
  //           transitionExit: styles.transitionExitActive,
  //           transitionExitActive: styles.transitionExitActive,
  //         }}
  //       >
  //         <div className={styles.modal_content_wrapper}>
  //           <h4 className={styles.modal_title}>{title}</h4>
  //           <div className={styles.modal_image_wrapper} style={{ width: "80%" }}>
  //             <VimeoPlayer
  //               url={src}
  //               width="100%"
  //               className={stylesVid.hover_react_player}
  //               volume={0.5}
  //               muted={true}
  //               playing={true}
  //               loop={true}
  //               pip={false}
  //               controls={true}
  //               playerOptions={{
  //                 color: "558BFF", // PRIMARY COLOR THEME
  //                 responsive: true,
  //               }}
  //             />
  //           </div>
  //           <p>{caption}</p>
  //         </div>
  //       </Modal>
  //     </>
  //     //  </div>
  //   )
}
export default HoverVideo
