'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Contact from '../Containers/Contact'

gsap.registerPlugin(ScrollTrigger)

function ThirdSection() {
  const sectionThree = useRef(null)

  useEffect(() => {
    const section = sectionThree.current

    let ctx = gsap.context(() => {
      gsap.to(section, {
        yPercent: -0.2, 
        backgroundPosition: `50% ${-window.innerHeight / 2}px`,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom 80%",
          pin: true,
          pinSpacing: true,
          scrub: true,
          // markers: true,
        },
      })
    }
    , section)

  }, [])

  return (
    <section className='w-screen h-screen overflow-hidden' ref={sectionThree}>
      {/* <Contact /> */}
      

      <div className='h-full w-full grid grid-cols-2'>
        <div className="bg-cyan-950">
          <h1 className='text-center text-8xl text-emerald-300 mt-32 pt-1 font-bold uppercase'>Contáctanos</h1>
        </div>
        <div className="bg-emerald-300">
          <h1 className='text-center text-8xl text-cyan-950 mt-10 uppercase font-bold '>Te contactamos</h1>
        </div>
      </div>
    </section>
  )
}

export default ThirdSection