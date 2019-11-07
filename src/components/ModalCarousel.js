/**
 * This file creates Modal corouself or image.
 * It is currently used to display temporary
 * images for in complete case studies or projects
 *
 * Uses CSS JS Objects for library compatibility.
 * TODO: Find a way to abstract them from this file
 */

// Boiler
import React from "react"

// Components
import Carousel, { Modal, ModalGateway } from "react-images"
import { useIsMobile } from "./Responsive"

// Styles as JS Objects for library compatibility
const container = {
  margin: `0 auto`,
  maxWidth: 960,
  padding: `0px 1.0875rem 1.45rem`,
  paddingTop: 0,
  background: "none !important",
}

const textFooter = {
  lineHeight: "var(--body-line-height)",
  color: "var(--white)",
  marginTop: "0px",
  marginBottom: "var(--text-md)",
  fontSize: "var(--text-base-size)",
}

const viewStyle = {
  "& > img": {
    maxHeight: "50%",
    overflow: "hidden",
  },
}

// CUSTOM COMMPONNET FOR REACT IMAGES CAROUSEL
const CustomHeader = ({ innerProps, currentView, getStyles }) => {
  return (
    <div style={getStyles("header", innerProps)} {...innerProps}>
      <h4 style={{ color: "var(--color-primary)" }}>{currentView.title}</h4>
    </div>
  )
}

const FooterCaption = ({ innerProps, currentView, getStyles }) => {
  const { title, caption } = currentView
  return (
    <span>
      <h3 style={{ color: "var(--color-primary-light)" }}>{title}</h3>
      <p style={getStyles("footerCaption", innerProps)}>{caption}</p>
    </span>
  )
}

const FooterCount = ({ innerProps, getStyles, carouselProps }) => {
  const { views, currentIndex } = carouselProps
  const totalIndex = views.length

  return (
    <span>
      <p style={getStyles("footerCount", innerProps)}>
        {`${currentIndex} of ${totalIndex}`}
      </p>
    </span>
  )
}

// Main Componen To export
const ModalCarousel = ({ photos, currentImage, onClose, isOpen }) => {
  var isMobile = useIsMobile()

  const textMargin = {
    marginBottom: "var(--space-unit)",
    marginTop: !isMobile ? "var(--space-unit)" : "0px",
    fontWeight: "500",
  }

  return (
    <ModalGateway>
      {isOpen ? (
        <Modal onClose={onClose} allowFullscreen={false}>
          <Carousel
            components={
              !isMobile
                ? {
                    FooterCaption,
                    FooterCount,
                  }
                : { Header: CustomHeader }
            }
            currentIndex={currentImage}
            views={photos.map(x => ({
              ...x.src,
              srcSet: x.src.srcSet,
              caption: x.caption,
              title: x.title,
            }))}
            // STYLE CAROUSEL BASED ON LIBRARY NEEDS
            styles={{
              footer: base => ({
                ...base,
                ...container,
              }),
              footerCaption: base => ({
                ...base,
                ...textFooter,
              }),
              footerCount: base => ({
                ...base,
                ...textFooter,
                ...textMargin,
              }),
              header: base => ({
                ...base,
                ...container,
                marginTop: "var(--space-unit)",
              }),
              view: base => ({
                ...base,
                ...viewStyle,
              }),
            }}
          />
        </Modal>
      ) : null}
    </ModalGateway>
  )
}

export default ModalCarousel
