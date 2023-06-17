'use client'

import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

import MainVideo from '@/components/Individuals/MainVideo'
import TextSectionOne from '@/components/Individuals/TextSectionOne'

function FirstSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    let ctx = gsap.context(() => {
      gsap.to(section, {
        yPercent: 30, 
        backgroundPosition: `50% ${-window.innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "center top",
          pin: true,
          pinSpacing: false,
          end: "bottom top",
          scrub: true,
          markers: true,
        },
      })
      gsap.to(video, {
        scale: 1.3,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 2,
          // markers: true,
        },
      })
    }, section)
    return () => {
      ctx.revert();
    }
  }, []);

  return (
    <section className='w-screen relative flex justify-center items-center overflow-hidden' ref={sectionRef} >
      <div className='relative w-full h-screen overflow-hidden' ref={videoRef}>
        <MainVideo />
      </div>
      
        <TextSectionOne />
    </section>
  )
}

export default FirstSection