import { Link } from "react-router-dom"
import { Phone, MapPin, Clock, Leaf } from "lucide-react"
import Button from "../../ui/Button"
import Menu from "../../ui/Menu"
import styles from "./Header.module.css"

import crown from '../../../assets/crown.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.topBarContent}>
            <div className={styles.topBarItem}>
              <Phone />
              <span>Order: 0812-3556-9222</span>
            </div>
            <div className={styles.topBarItem}>
              <MapPin />
              <span>Tuban, Jawa Timur</span>
            </div>
            <div className={styles.topBarItem}>
              <Clock />
              <span>06:00 - 11:00</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.mainContent}>
          <Link to="/" className={styles.logo} aria-label="Waroeng Made - Authentic Balinese Restaurant">
            <div className={styles.logoIcon}>
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className={styles.logoText}>
              <div className={styles.logoTitleContainer}>
                <span className={styles.logoTitle}>Waroeng </span>
                <div className={styles.madeContainer}>
                  <img src={crown} alt="Crown" className={styles.crown} />
                  <span className={styles.logoTitle}>Made</span>
                </div>
              </div>
              <span className={styles.logoSubtitle}>Authentic Balinese Cuisine</span>
            </div>
          </Link>

          <div className={styles.actions}>
            <Button variant="outline" className={styles.orderButton}>
              Order Gojek
            </Button>

            <Menu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
