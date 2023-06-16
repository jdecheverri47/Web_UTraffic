'use client'

import { useRef, useEffect } from 'react'
import { ContextProps } from '../Composable/ContextProps'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Contact from '../Containers/Contact'

gsap.registerPlugin(ScrollTrigger)

function ThirdSection() {
  const sectionThree = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  

  useEffect(() => {
    const section = sectionThree.current
    const left = leftRef.current
    const right = rightRef.current

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(left, {xPercent: -100, duration: 2})
      tl.from(right, {xPercent: 100, duration: 2})

      ScrollTrigger.create({
        animation: tl,
        trigger: section,
        start: "top top",
        end: "+=800",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        // markers: true,
        anticipatePin: 1,
      })
    }
    , section)

  }, [])

  return (
    <section className='w-screen h-screen overflow-hidden relative' ref={sectionThree}>
      <ContextProps.Provider value={{ leftRef, rightRef }}>
        <Contact />
      </ContextProps.Provider>
    </section>
  )
}

export default ThirdSection