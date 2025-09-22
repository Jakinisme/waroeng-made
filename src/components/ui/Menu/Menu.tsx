"use client"

import { useState, useEffect, useRef } from "react"
import { MenuIcon, CloverIcon as CloseIcon, Phone, MapPin, Clock, Leaf } from "lucide-react"
import  Button from "../../ui/Button"
import styles from "./Menu.module.css"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)
  const burgerRef = useRef<HTMLButtonElement | null>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleGlobalPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!isOpen) return
      const target = event.target as Node | null
      const clickedInsideMenu = !!(mobileMenuRef.current && target && mobileMenuRef.current.contains(target))
      const clickedBurger = !!(burgerRef.current && target && burgerRef.current.contains(target))
      if (!clickedInsideMenu && !clickedBurger) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("mousedown", handleGlobalPointerDown)
    window.addEventListener("touchstart", handleGlobalPointerDown, { passive: true })
    window.addEventListener("keydown", handleEscape)
    return () => {
      window.removeEventListener("mousedown", handleGlobalPointerDown)
      window.removeEventListener("touchstart", handleGlobalPointerDown)
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  return (
    <>
      <button
        ref={burgerRef}
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className={styles.menuButton}
        onClick={toggleMenu}
        type="button"
      >
        {isOpen ? <CloseIcon size={24} aria-hidden /> : <MenuIcon size={24} aria-hidden />}
      </button>

      {isOpen && (
        <div ref={mobileMenuRef} id="mobile-menu" className={styles.overlay} role="dialog" aria-modal="true">
          <div className={styles.container}>
            {/* Restaurant Info */}
            <div className={styles.restaurantInfo}>
              <div className={styles.restaurantHeader}>
                <div className={styles.restaurantIcon}>
                  <Leaf className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className={styles.restaurantTitle}>Waroeng Made</h3>
                  <p className={styles.restaurantSubtitle}>Authentic Balinese Cuisine</p>
                </div>
              </div>

              <div className={styles.restaurantDetails}>
                <div className={styles.detailItem}>
                  <Phone className="h-4 w-4" />
                  <span>0812-3456-789</span>
                </div>
                <div className={styles.detailItem}>
                  <MapPin className="h-4 w-4" />
                  <span>Tuban, Jawa Timur</span>
                </div>
                <div className={styles.detailItem}>
                  <Clock className="h-4 w-4" />
                  <span>Open Daily 8AM - 10PM</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className={styles.navigation} aria-label="Mobile navigation">
              <a href="#menu" className={styles.navLink} onClick={toggleMenu}>
                <span className={styles.navTitle}>Our Menu</span>
                <span className={styles.navDescription}>Explore dishes</span>
              </a>
              <a href="#about" className={styles.navLink} onClick={toggleMenu}>
                <span className={styles.navTitle}>About Us</span>
                <span className={styles.navDescription}>Our story</span>
              </a>
              <a href="#gallery" className={styles.navLink} onClick={toggleMenu}>
                <span className={styles.navTitle}>Gallery</span>
                <span className={styles.navDescription}>View photos</span>
              </a>
              <a href="#contact" className={styles.navLink} onClick={toggleMenu}>
                <span className={styles.navTitle}>Contact</span>
                <span className={styles.navDescription}>Get in touch</span>
              </a>
            </nav>

            {/* Action Buttons */}
            <div className={styles.actions}>
              <Button variant="outline" className="" onClick={toggleMenu}>
                Order Online
              </Button>
              <Button
                className=""
                onClick={toggleMenu}
              >
                Reserve Table
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileMenu
