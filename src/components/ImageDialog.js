import React, { useState } from "react"
import Modal from "react-responsive-modal"
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from "../styles/image-dialog.module.scss"
import ContentLoader from "react-content-loader"
// import LazyLoad from "react-lazyload"

import LazyLoad from "react-lazy-load"
import LoadingImage from "./LoadingImage"
const ImageDialog = ({ src, placeholderSrc = "", title, caption }) => {
  // Lazy loads an image zoom component

  const [openDialog, setOpenDialog] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
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
