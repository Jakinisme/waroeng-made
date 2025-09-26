"use client"
import styles from "./Hero.module.css"
import Button from "../../ui/Button"

export interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundImageUrl?: string
  ariaLabel?: string
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImageUrl = "/placeholder.jpg",
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
        </div>
        
        <div className={styles.cta}>
            <Button>See Menu</Button>
        </div>
      </div>
    </section>
  )
}
