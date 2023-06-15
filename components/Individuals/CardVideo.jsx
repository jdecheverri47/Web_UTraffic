import { useState } from "react"
import '@/public/assets/style/StyleVideo.css'

function CardVideo({video}) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const videoClassName = isHovered ? "video-visible" : "video-hidden";


  return (
    <div
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className="absolute w-full h-full object-cover overflow-hidden"
  >
    <div className="absolute w-full h-full overflow-hidden">
      <video
        src={video}
        type="video/mp4"
        className={videoClassName}
        autoPlay
        muted
        loop
      />
    </div>
  </div>
  )
}

export default CardVideo