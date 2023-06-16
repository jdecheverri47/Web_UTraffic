import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Image from "next/image"

import bubbles from "../Composable/BubbleData"

function ContactBubbles() {
  console.log(bubbles)
  const bubblesRender = bubbles.map((bubble, index) => {
    return (
      <div key={index} className="rounded-full bg-white w-[200px] h-[200px] overflow-hidden flex justify-center items-center m-8" style={{
        boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;'
      }}>
        <Image 
          src={bubble.icon} 
          alt={bubble.alt} 
          width={100} 
          height={100} 
          quality={100}
          className="shadow-outline"
        />
      </div>
    )
  })
  return (
    <div className="flex flex-warp flex-row justify-center items-center align-middle mt-10">
      {bubblesRender}
    </div>
  )
}

export default ContactBubbles