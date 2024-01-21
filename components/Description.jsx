import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"

const phrases = [
  "Rishikesh is a city in the northern state of Uttarakhand, India",
  "Rishikesh is often referred to as the Yoga Capital of the World",
  "It is considered a holy city in Hinduism.",
  "The city is situated on the banks of the sacred Ganges River",
  "The ashram of Maharishi Mahesh Yogi, where The Beatles stayed in 1968, is located in Rishikesh.",
]

const Description = () => {
  return (
    <section className="relative text-white text-[3vw] uppercase mt-[45vh] ml-[10vw] z-10">
      {phrases.map((phrase, i) => (
        <AnimatedText key={`phrase-${i}`}>{phrase}</AnimatedText>
      ))}
    </section>
  )
}

const AnimatedText = ({ children }) => {
  const text = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "0 bottom",
        end: "bottom+=300px bottom",
        scrub: true,
      },
      left: "-200px",
      opacity: 0,
    })
  }, [])

  return (
    <p ref={text} className="m-0 relative lowercase">
      {children}
    </p>
  )
}
export default Description
