import { gsap } from "gsap"
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

function Circle( {sectionRefProp}) {
  const circleRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const circle = circleRef.current
    const text = textRef.current
    const section = sectionRefProp.current

    let ctx = gsap.context(() => {
      gsap.fromTo(
        circle,
        { 
          y: -window.innerHeight / 2, 
          display: 'none',
        },
        {
          duration: 2,
          y: 0,
          display: 'flex',
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom -60%',
            scrub: true,
            // markers: true,

          },

        }
      ), 
      gsap.fromTo(
        [circle, text],
        { scale: 0.1 },
        {
          duration: 0.5,
          scale: 1,
          autoAlpha: 1,
          delay: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'center center',
            end: 'center -20%',
            scrub: true,
            // markers: true,
          },
        }
      );
    }, circle)
    return () => {
      ctx.kill()
    }
  }, [sectionRefProp])
  return (
    <div
      style={{
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        backgroundColor: 'white',
        position: 'absolute',
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        top: '35%',
        left: '50%',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        transform: 'translate(-50%, -50%)',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      }}
      ref={circleRef}
    >
      <span className='text-cyan-900' ref={textRef}>¿Que hacemos?</span>
    </div>
  )
}

export default Circle