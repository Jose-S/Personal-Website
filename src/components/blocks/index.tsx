// src/blocks/index.tsx
import loadable from "@loadable/component"

const RotatingTextAnimation = loadable(() =>
  import("./rotating-type-animation")
)
const InlineText = loadable(() => import("./inlineText"))
const ProcessHeader = loadable(() => import("./process-header"))
const IconBulletContent = loadable(() => import("./icon-bullet-content"))
const IconBulletContainer = loadable(() => import("./iconBulletContainer"))
const ZoomImage = loadable(() => import("./zoomImage"))
const ZoomImageGrid = loadable(() => import("./zoomImageGrid"))
const HeadingBullet = loadable(() => import("./headingBullet"))
const HeadingBulletContainer = loadable(() =>
  import("./headingBulletContainer")
)
const ToggleImage = loadable(() => import("./toggleImage"))

export default function GetCustomBlock(name: string) {
  switch (name) {
    case "lazyblock/rotating-type-animation":
      return RotatingTextAnimation
    case "lazyblock/inline-text":
      return InlineText
    case "lazyblock/process-header":
      return ProcessHeader
    case "lazyblock/icon-bullet-content":
      return IconBulletContent
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
    default:
      return null
  }
}
