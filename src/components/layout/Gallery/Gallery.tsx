import styles from "./Gallery.module.css"
import sate2 from '../../../assets/sate2.webp'

import Button from "../../ui/Button"

import useIntersectionObserver from "../../../hooks/useInteractionObserver"
import useTypewriter from "../../../hooks/useTypewriter"

import { Link } from "react-router-dom"
import { useEffect } from "react"


type GallerySectionProps = {
  title?: string
  subtitle?: string
  className?: string
}

const Gallery = ({
  title = "Gallery",
  subtitle = "A curated look",
}: GallerySectionProps) => {

  const image = [
    {
        "src": `${sate2}`,
        "alt": "1"
    },
    {
        "src": `${sate2}`,
        "alt": "2"
    },
    {
        "src": `${sate2}`,
        "alt": "3"
    },
    {
        "src": `${sate2}`,
        "alt": "4"
    },
    {
        "src": `${sate2}`,
        "alt": "5"
    },
    {
        "src": `${sate2}`,
        "alt": "6"
    }
]

  const slots = Array.from({ length: 6 })
    .map((_, i) => image[i])
    .filter(Boolean)

    const { ref, isIntersecting } = useIntersectionObserver({
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px',
            triggerOnce: true
        })

    const { displayText: typewriterDescription, startTyping: startDescriptionTyping, isComplete } = useTypewriter({
            text: subtitle,
            speed: 30,
            infinite: false,
            delay: 500,
        })
    
    useEffect(() => {
        if (isIntersecting && !isComplete) {
            startDescriptionTyping()
        }
    }, [isIntersecting, isComplete, startDescriptionTyping])

  return (
    <section ref={ref} className={`${styles.gallery} ${isIntersecting ? styles.visible : ""}`} aria-label="Image gallery">
      <header className={styles.header}>
        <div className={styles.eyebrow} aria-hidden="true"></div>
        <div className={styles.titleWrap}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle ? <p className={styles.subtitle}>
            {typewriterDescription}
            {!isComplete && <span className={styles.cursor}>|</span>}
            </p> : null}
        </div>
      </header>

      <div className={styles.grid} role="list">
        {slots.map((item, index) => (
          <figure key={index} role="listitem" className={`${styles.item} ${styles[`slot${index + 1}`]}`}>
            <img
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              className={styles.image}
            />
            <figcaption className="sr-only">{item.alt}</figcaption>
          </figure>
        ))}
      </div>

      <div className={styles.cta}>
        <Link to={"/gallery"}>
          <Button>See more</Button>
        </Link>
      </div>
    </section>
  )
}

export default Gallery