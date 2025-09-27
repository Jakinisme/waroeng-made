"use client"
import { useEffect } from "react"
import { Link } from "react-router-dom"

import styles from "./Hero.module.css"
import Button from "../../ui/Button"

import useInteractionObserver from "../../../hooks/useInteractionObserver"
import useTypewriter from "../../../hooks/useTypewriter"

import crown from '../../../assets/crown.png'
import motif from '../../../assets/motif.png'

export interface HeroProps {
  title: string
  subtitle?: string
  backgroundImageUrl?: string
  ariaLabel?: string
}

export default function Hero({
  title,
  subtitle,
  ariaLabel = "Hero section",
}: HeroProps) {
  const headingId = "hero-heading"
  const { ref, isIntersecting } = useInteractionObserver({
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true
  })

  const { displayText: typewriterSubtitle, startTyping: startSubtitleTyping } = useTypewriter({
    text: subtitle || '',
    speed: 100,
    infinite: true,
    delay: 1000,
  })

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
        style={{ backgroundImage: `url(${motif})` }}
      />
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 id={headingId} className={styles.title}>
            {title === "Waroeng Made" ? (
              <>
                <span>Waroeng </span>
                <div className={styles.madeContainer}>
                  <img src={crown} alt="Crown" className={styles.crown} />
                  <span>Made</span>
                </div>
              </>
            ) : (
              title
            )}
          </h1>
          {subtitle ? (
            <p className={styles.subtitle}>
              {typewriterSubtitle}
              <span className={styles.cursor}>|</span>
            </p>
          ) : null}
          <div className={styles.cta}>
            <Link to="/about">
              <Button variant="outline">About Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
