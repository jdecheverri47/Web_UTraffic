'use client'

import Lista from '../Individuals/CardList'
import Circle from '../Individuals/Circle'
import peaje from '@/public/assets/images/peaje.png'
import its from '@/public/assets/images/its.png'
import seguridad from '@/public/assets/images/seguridad.png'
import mantenimiento from '@/public/assets/images/mantenimiento.png'

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


const datos = 
[
  {
    key: 1,
    nombre: 'peajeObj',
    color: 'bg-cyan-950',
    img: peaje,
    alt: 'Peaje Imagen',
    video: '/assets/videos/CardVideoOne.mp4',
    text: 'PEAJES'
  },
  {
    key: 2,
    nombre: 'itsObj',
    color: 'bg-emerald-300',
    img: its,
    alt: 'ITS Imagen',
    text: 'INTELIGENT TRANSPORTATION SYSTEMS (ITS)'
  },
  {
    key: 3,
    nombre: 'seguridadObj',
    color: 'bg-teal-600',
    img: seguridad,
    alt: 'Seguridad Imagen',
    text: 'SEGURIDAD Y SEÑALIZACIÓN'   
  },
  {
    key: 4,
    nombre: 'mantenimientoObj',
    color: 'bg-cyan-950',
    img: mantenimiento,
    alt: 'Mantenimiento Imagen',
    text: 'MANTENIMIENTO Y OPERACIÓN'
  }
]

function SeccionDos() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section2 = sectionRef.current
    
    let ctx = gsap.context(() => {
      gsap.to(section2, {
        yPercent: -0.5, 
        backgroundPosition: `50% ${-window.innerHeight / 2}px`,
        scrollTrigger: {
          trigger: section2,
          start: "top top",
          end: "bottom 60%",
          pin: true,
          pinSpacing: false,
          scrub: true,
          // markers: true,
        },
      });
  }, section2)
    return () => ctx.kill();
  }, [])

  return (
    <section className='grid grid-cols-2 w-screen h-screen' ref={sectionRef}>
      {datos.map((dato, index) => (
        <div key={index} className='grid-cols-1 h-full'>
          <Lista datos={datos.slice(index, index + 1)} sectionRefProp={sectionRef} />
        </div>
      ))}
      <Circle sectionRefProp={sectionRef} />
    </section>
  )
}

export default SeccionDos