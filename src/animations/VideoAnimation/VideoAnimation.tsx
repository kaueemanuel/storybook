import { HtmlHTMLAttributes } from "react"

export interface VideoAnimationProps
  extends HtmlHTMLAttributes<HTMLVideoElement> {
  src: string
  alt?: string
  type?: "video/webm" | "video/mp4"
}

const VideoAnimation = ({
  src,
  alt,
  type = "video/webm",
  ...otherProps
}: VideoAnimationProps) => {
  return (
    <video
      {...otherProps}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-label={alt}
    >
      <source src={src} type={type} />
    </video>
  )
}

export default VideoAnimation
