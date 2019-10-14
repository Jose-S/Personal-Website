/**
 * This file creates a lazy loaded
 * image with a modal dialog.
 *
 * The componnet takes in:
 *   - A src of the image to lazyload
 *   - A src to the lazyload placeholder
 *   - The title and caption of the image
 */

// ----------- IMPORT -----------

// Boiler
import React, { useState } from "react"
// Components
import Modal from "react-responsive-modal"
import LazyLoad from "react-lazy-load"
import LoadingImage from "./LoadingImage"
// Styles
import styles from "../styles/image-dialog.module.scss"

// ----------- CODE -----------

const ImageDialog = ({ src, placeholderSrc = "", title, caption }) => {
  // Hooks control the behaviour of this image
  const [openDialog, setOpenDialog] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {/* Layload the image */}
      <div className={styles.images_wrapper}>
        <LoadingImage
          src={placeholderSrc}
          srcClassName={isLoading ? styles.fadeIn : styles.fadeOut}
          positionClass={styles.inner_loading_image}
        ></LoadingImage>

        <LazyLoad
          offsetVertical={500}
          height="100%"
          onContentVisible={() => setIsLoading(false)}
          className={styles.image_stacker__bottom}
        >
          <img
            alt={title}
            src={src}
            onClick={() => {
              setOpenDialog(true)
            }}
            className={styles.image_wrapper}
          />
        </LazyLoad>
        <small className={styles.caption}>{title}</small>
      </div>

      {/* Image inside of modal */}
      <Modal
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        center={true}
        animationDuration={500}
        classNames={{
          modal: styles.modal_wrapper,
          transitionEnter: styles.transitionEnter,
          transitionEnterActive: styles.transitionEnterActive,
          transitionExit: styles.transitionExitActive,
          transitionExitActive: styles.transitionExitActive,
        }}
      >
        <div className={styles.modal_content_wrapper}>
          <h4 className={styles.modal_title}>{title}</h4>
          <div className={styles.modal_image_wrapper}>
            <img
              alt=""
              src={src}
              className={styles.inner_modal_image_wrapper}
            />
          </div>

          <p>{caption}</p>
        </div>
      </Modal>
    </>
  )
}

export default ImageDialog
