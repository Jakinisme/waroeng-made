"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { MenuIcon, CloverIcon as CloseIcon, Phone, MapPin, Clock, Leaf } from "lucide-react"
import  Button from "../../ui/Button"
import styles from "./Menu.module.css"

const Menu = () => {
  const linkItem = [
    {href: "/menu", label: "Our Menu", description: "Explore dishes"},
    {href: '/about', label: "About Us", description: "Our story"},
    {href: '/gallery', label: "Gallery", description: "View photos"},
    {href: '/contact', label: "Contact", description: "Get in touch"},
  ]

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const burgerRef = useRef<HTMLButtonElement | null>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleGlobalPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!isOpen) return
      const target = event.target as Node | null
      const clickedInsideMenu = !!(menuRef.current && target && menuRef.current.contains(target))
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
        aria-controls="menu"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className={styles.menuButton}
        onClick={toggleMenu}
        type="button"
      >
        {isOpen ? <CloseIcon size={24} aria-hidden /> : <MenuIcon size={24} aria-hidden />}
      </button>

      {isOpen && (
        <div className={styles.overlay} role="presentation">
          <div
            ref={menuRef}
            id="mobile-menu"
            className={styles.container}
            role="dialog"
            aria-modal="true"
            aria-label="Restaurant menu"
          >
            <button
              type="button"
              aria-label="Close menu"
              className={styles.closeButton}
              onClick={toggleMenu}
            >
              <CloseIcon size={20} aria-hidden />
            </button>
            <div className={styles.restaurantInfo}>
              <div className={styles.restaurantHeader}>
                <div className={styles.restaurantIcon}>
                  <Leaf className="h-4 w-4" />
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

            <nav className={styles.navigation} aria-label="Mobile navigation">
              {linkItem.map((item, index) => (
                <Link to={item.href} key={index} className={styles.navLink} onClick={toggleMenu}>
                  <span className={styles.navTitle}>{item.label}</span>
                  <span className={styles.navDescription}>{item.description}</span>
                </Link>
              ))}
            </nav>

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

export default Menu
