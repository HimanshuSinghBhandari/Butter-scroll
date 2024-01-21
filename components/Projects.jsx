"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useLayoutEffect, useRef, useState } from "react"

const projects = [
  {
    title: "Yoga Capital of India",
    src: "salar_de_atacama.jpg",
  },
  {
    title: "Neelkanth Mahadev Temple.",
    src: "valle_de_la_muerte.jpg",
  },
  {
    title: "River rafing",
    src: "miscani_lake.jpg",
  },
  {
    title: "Ganga Aarti",
    src: "miniques_lagoon.jpg",
  },
]

const Projects = () => {
  const [selected, setSelected] = useState(0)
  const image = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.create({
      trigger: image.current,
      start: "-=50px",
      end: document.body.offsetHeight,
      pin: true,
    })
  }, [])

  return (
    <section className="flex flex-col mt-[25vh] p-[10%]">
      <div className="flex h-[700px] justify-between g-[5%]">
        <div className="relative w-[40%] h-full" ref={image}>
          <Image
            src={`/images/${projects[selected].src}`}
            fill
            alt="image"
            className="object-cover"
          />
        </div>
        <div className="w-[20%] text-[1.6vw]">
          <p>
          Yoga and Meditation:

          Rishikesh is renowned for its numerous yoga and meditation centers, attracting practitioners from around the world.
          The city offers a serene and tranquil environment, ideal for self-discovery and spiritual growth.
          </p>
        </div>
        <div className="flex h-full w-[20%] items-end text-[1vw]">
          <p>
          Lakshman Jhula and Ram Jhula:

           These are suspension bridges across the Ganges 
           and are important landmarks in Rishikesh. 
           Lakshman Jhula is believed to be the spot
            where Lord Rama's brother Lakshman crossed the river on a jute rope..
          </p>
        </div>
      </div>
      <div className="mt-64 flex flex-col justify-center">
        {projects.map(({ title }, i) => (
          <div
            onMouseOver={() => setSelected(i)}
            key={`project-${i}`}
            className="flex justify-end border-t border-white text-[3vw] pb-5 pt-5 last-of-type:border-b font-bold"
          >
            <p>{title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
