import TrashBinWebm from "../../../assets/trash_bin_animation.webm"
import VideoAnimation, {
  VideoAnimationProps,
} from "../../VideoAnimation/VideoAnimation"

const TrashBinAnimation = (
  props: Omit<
    VideoAnimationProps,
    "src" | "autoPlay" | "loop" | "muted" | "playsInline" | "aria-label"
  >,
) => {
  return <VideoAnimation {...props} src={TrashBinWebm} />
}

export default TrashBinAnimation
