'use client'

import Lista from '../Containers/CardList'
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
    text: 'PEAJES',
    video: '/assets/videos/CardVideoOne.mp4',
  },
  {
    key: 2,
    nombre: 'itsObj',
    color: 'bg-emerald-300',
    img: its,
    alt: 'ITS Imagen',
    text: 'INTELIGENT TRANSPORTATION SYSTEMS (ITS)',
    video: '/assets/videos/CardVideoTwo.mp4',
  },
  {
    key: 3,
    nombre: 'seguridadObj',
    color: 'bg-teal-600',
    img: seguridad,
    alt: 'Seguridad Imagen',
    text: 'SEGURIDAD Y SEÑALIZACIÓN',
    video: '/assets/videos/CardVideoThree.mp4',
  },
  {
    key: 4,
    nombre: 'mantenimientoObj',
    color: 'bg-cyan-950',
    img: mantenimiento,
    alt: 'Mantenimiento Imagen',
    text: 'MANTENIMIENTO Y OPERACIÓN',
    video: '/assets/videos/CardVideoFour.mp4',
  }
]

function SeccionDos() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section2 = sectionRef.current

    let ctx = gsap.context(() => {
      gsap.to(section2, {
        // yPercent: -10,
        backgroundPosition: `50% ${-window.innerHeight / 2}px`,
        scrollTrigger: {
          trigger: section2,
          start: "top top",
          end: "bottom 150px",
          pin: true,
          pinSpacing: true,
          scrub: 2,
          // markers: true,
        },
      });
  }, section2)
  }, [])

  return (
    <section className='grid grid-cols-2 w-screen h-screen bg-cyan-950' ref={sectionRef}>
      {datos.map((dato, index) => (
        <div key={index} className='grid-cols-1 h-full bg-cyan-950'>
          <Lista datos={datos.slice(index, index + 1)} sectionRefProp={sectionRef} />
        </div>
      ))}
      <Circle sectionRefProp={sectionRef} />
    </section>
  )
}

export default SeccionDos