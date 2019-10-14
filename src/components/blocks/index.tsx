/**
 *  VERY IMPORTANT: This file contains a function used to map all components
 *  Each component is imported in an lazy loadable manner.
 *  THIS FUNCTION DRIVES THE WHOLE WEBSITE!
 */

// ----------- IMPORT -----------
import loadable from "@loadable/component"

// Imports all WP components
const RotatingTextAnimation = loadable(() => import("./rotatingTypeAnimation"))
const InlineText = loadable(() => import("./inlineText"))
const ProcessHeader = loadable(() => import("./process-header"))
const IconBullet = loadable(() => import("./iconBullet"))
const IconBulletContainer = loadable(() => import("./IconBulletContainer"))
const ZoomImage = loadable(() => import("./zoomImage"))
const ZoomImageGrid = loadable(() => import("./zoomImageGrid"))
const HeadingBullet = loadable(() => import("./headingBullet"))
const HeadingBulletContainer = loadable(() =>
  import("./headingBulletContainer")
)
const ToggleImage = loadable(() => import("./toggleImage"))
const ImageCarousal = loadable(() => import("./imageCarousal"))
const ToggleImageCarousal = loadable(() => import("./toggleImageCarousal"))
const ImageDialog = loadable(() => import("./imageDialogComponent"))
const ImageDialogGrid = loadable(() => import("./imageDialogGrid"))
const ToggleImageGrid = loadable(() => import("./toggleImageGrid"))
const Tabs = loadable(() => import("./tabBlock"))
const VimeoVideo = loadable(() => import("./vimeoVideo"))
const VideoGrid = loadable(() => import("./videoGrid"))

export default function GetCustomBlock(name: string) {
  switch (name) {
    case "lazyblock/rotating-type-animation":
      return RotatingTextAnimation
    case "lazyblock/inline-text":
      return InlineText
    case "lazyblock/process-header":
      return ProcessHeader
    case "lazyblock/icon-bullet-content":
      return IconBullet
    case "lazyblock/icon-bullet-col":
      return IconBulletContainer
    case "lazyblock/zoom-image":
      return ZoomImage
    case "lazyblock/zoom-image-grid":
      return ZoomImageGrid
    case "lazyblock/heading-bullet":
      return HeadingBullet
    case "lazyblock/heading-bullet-container":
      return HeadingBulletContainer
    case "lazyblock/toggle-image":
      return ToggleImage
    case "lazyblock/image-carousel":
      return ImageCarousal
    case "lazyblock/toggle-image-carousel":
      return ToggleImageCarousal
    case "lazyblock/image-dialog":
      return ImageDialog
    case "lazyblock/image-dialog-grid":
      return ImageDialogGrid
    case "lazyblock/toggleable-image-grid":
      return ToggleImageGrid
    case "lazyblock/tabs":
      return Tabs
    case "lazyblock/video":
      return VimeoVideo
    case "lazyblock/video-grid":
      return VideoGrid
    default:
      return null
  }
}
