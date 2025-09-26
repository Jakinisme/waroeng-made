"use client"
import styles from "./Hero.module.css"
import Button from "../../ui/Button"
import heroImage from "../../../assets/sate.png"

export interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundImageUrl?: string
  ariaLabel?: string
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImageUrl = heroImage,
  ariaLabel = "Hero section",
}: HeroSectionProps) {
  const headingId = "hero-heading"

  return (
    <section
      className={styles.hero}
      aria-label={ariaLabel}
      aria-labelledby={headingId}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      role="banner"
    >
      <div className={styles.overlay} aria-hidden="true" />
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
