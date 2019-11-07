/**
 * This file creates a placeholder gallery. A placeholder gallery gives
 * the user a quick glimpse of a project with no case study.
 * They are quieried from wordpress
 *
 */

// Boiler
import React, { useCallback, useState } from "react"
import { graphql, StaticQuery } from "gatsby"
// Components
import Gallery from "react-photo-gallery"
import PlaceholderImage from "./PlaceholderImage"
import ModalCarousel from "./ModalCarousel"

const PlaceholderGallery = ({ projectIndex }) => {
  // Hooks for controlling the modal carausel
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  // Modal controls
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  //   Returns an array of all the images in the grid
  const getPhotos = data => {
    var imgs = []

    imagesResolutions(data).map(imageRes =>
      imgs.push({
        src: imageRes.src,
        width: Math.round(imageRes.src.presentationWidth),
        height: Math.round(imageRes.src.presentationHeight),
        key: imageRes.title,
        title: imageRes.title,
        caption: imageRes.caption,
      })
    )
    return imgs
  }

  // Transforms queried images into a list of queried fluid images
  const imagesResolutions = data => {
    var imgs = []
    data.allWordpressWpProject.edges[
      projectIndex
    ].node.acf.placeholder_gallery.map(img =>
      imgs.push({
        src: img.localFile.childImageSharp.fluid,
        title: img.title,
        caption: img.caption.replace(/(<p[^>]+?>|<p>|<\/p>)/gim, ""),
      })
    )

    return imgs
  }

  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpProject(sort: { fields: [acf___order], order: ASC }) {
            edges {
              node {
                title
                acf {
                  placeholder_gallery {
                    caption
                    title
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 400) {
                          ...GatsbyImageSharpFluid
                          presentationWidth
                          presentationHeight
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={propsS => {
        // Checks if the project has placeholder image, if not returns empty componnet
        try {
          var photos = getPhotos(propsS)
          return (
            <>
              {/* IMAGE GRID */}
              <Gallery
                photos={photos}
                margin={8}
                onClick={openLightbox}
                renderImage={props => <PlaceholderImage {...props} />}
              />
              {/* IMAGE CAROUSEL */}
              <ModalCarousel
                photos={photos}
                currentImage={currentImage}
                onClose={closeLightbox}
                isOpen={viewerIsOpen}
              ></ModalCarousel>
            </>
          )
        } catch (error) {
          // Not Photos found
          return <></>
        }
      }}
    />
  )
}

// LEFT HERE FOR REFERENCE: SHOWS HOW TO PROCESS IMAGES WITH GATSBY IMAGE
// AUTO LAZYLOADS THEM
// {
//    imagesResolutions(propsS).map(imageRes => (
//       <>
//          <div style={{ width: imageRes.presentationWidth }}>
//             <Img fluid={imageRes} key={imageRes.src} />
//          </div>
//          {/* <img src={imageRes.src} /> */}
//       </>
//    ))
// }

export default PlaceholderGallery
