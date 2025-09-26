"use client"
import styles from "./Hero.module.css"
import Button from "../../ui/Button"
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

  return (
    <section
      className={styles.hero}
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
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
          <div className={styles.cta}>
            <Button className={styles.ctaButton}>About Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
