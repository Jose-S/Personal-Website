// src/blocks/index.tsx
import loadable from "@loadable/component"

const RotatingTextAnimation = loadable(() =>
  import("./rotating-type-animation")
)
const InlineText = loadable(() => import("./inlineText"))
const ProcessHeader = loadable(() => import("./process-header"))

export default function GetCustomBlock(name: string) {
  switch (name) {
    case "lazyblock/rotating-type-animation":
      return RotatingTextAnimation
    case "lazyblock/inline-text":
      return InlineText
    case "lazyblock/process-header":
      return ProcessHeader
    default:
      return null
  }
}
