import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

function TextSectionOne() {
  const nameRef = useRef(null)
  const secondRef = useRef(null)
  const thirdRef = useRef(null)
  const backgroundRef = useRef(null)

  const textStyle = {textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}

  useLayoutEffect(() => {
    const name = nameRef.current
    const second = secondRef.current
    const third = thirdRef.current
    const background = backgroundRef.current

    let ctx = gsap.context(() => {
      
      gsap.to(background, 
        {
        y: '-30%',
        ease: 'none',
        opacity: 0,
        scrollTrigger: {
          trigger: background,
          start: 'top 20%',
          end: 'bottom 20%',
          scrub: true,
          // markers: true
        }
      }),
  
      gsap.to(name, {
        x: -350,
        duration: 2,
        scrollTrigger: {
          trigger: name,
          start: 'center 30%',
          end: 'bottom 20%',
          scrub: 2,
          // markers: true
        }
      }),
      gsap.to(second, {
        x: 350,
        duration: 2,
        scrollTrigger: {
          trigger: second,
          start: 'top 40%',
          end: 'bottom 30%',
          scrub: 2,
        }
    }),
      gsap.to(third, {
        x: -350,
        duration: 2,
        scrollTrigger: {
          trigger: third,
          start: 'top 50%',
          end: 'bottom 40%',
          scrub: 2,
        }
      })
    }, background)
    return () => {
      ctx.revert()
    }
    
  }, [])
  return (
      <div className='overflow-hidden min-w-fit px-[100vw] absolute py-5 z-10 text-center whitespace-nowrap' style={{backgroundColor: 'rgba(8, 51, 68, 0.75)'}} ref={backgroundRef} >
        <h1 className="text-[12rem] text-center text-emerald-300 font-extrabold min-w-fit" style={textStyle} ref={nameRef} >
          U TRAFFIC
        </h1>

        <h2 className="text-white font-semibold text-5xl mb-8" style={textStyle} ref={secondRef} >
          SOMOS EL ONE STOP SHOP
          <br/>
            DE LAS CONCESIONES VIALES
        </h2>

        <h3 className=" text-emerald-300 font-semibold text-3xl mb-8" style={textStyle} ref={thirdRef}>
          Solución integral para peajes, <br/>
          ITS y operación de concesiones viales.
        </h3>
      </div>          
  )
}

export default TextSectionOne