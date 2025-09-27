"use client"
import { useEffect } from "react"
import styles from "./Hero.module.css"
import Button from "../../ui/Button"
import { useInteractionObserver, useTypewriter } from "../../../hooks"
import motifImage from "../../../assets/motif.png"

export interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundImageUrl?: string
  ariaLabel?: string
}

export default function HeroSection({
  title,
  subtitle,
  ariaLabel = "Hero section",
}: HeroSectionProps) {
  const headingId = "hero-heading"
  const { ref, isIntersecting } = useInteractionObserver({
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  })

  // Typewriter effect for subtitle (infinite)
  const { displayText: typewriterSubtitle, startTyping: startSubtitleTyping } = useTypewriter({
    text: subtitle || '',
    speed: 100,
    infinite: true,
    delay: 1000, // Start typing 1 second after component mounts
  })

  // Start typewriter effect when component mounts
  useEffect(() => {
    if (subtitle) {
      startSubtitleTyping()
    }
  }, [subtitle, startSubtitleTyping])

  return (
    <section
      ref={ref}
      className={`${styles.hero} ${isIntersecting ? styles.visible : ''}`}
      aria-label={ariaLabel}
      aria-labelledby={headingId}
      role="banner"
    >
      <div className={styles.overlay} aria-hidden="true" />
      <div
        className={styles.motif}
        aria-hidden="true"
        style={{ backgroundImage: `url(${motifImage})` }}
      />
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 id={headingId} className={styles.title}>
            {title}
          </h1>
          {subtitle ? (
            <p className={styles.subtitle}>
              {typewriterSubtitle}
              <span className={styles.cursor}>|</span>
            </p>
          ) : null}
          <div className={styles.cta}>
            <Button className={styles.ctaButton}>About Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
