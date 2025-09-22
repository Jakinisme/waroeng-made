import { Phone, MapPin, Clock, Leaf } from "lucide-react"
import Button from "../../ui/Button"
import Menu from "../../ui/Menu"
import styles from "./header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.topBarContent}>
            <div className={styles.topBarItem}>
              <Phone className="h-4 w-4" />
              <span>Order: 0812-3456-789</span>
            </div>
            <div className={styles.topBarItem}>
              <MapPin className="h-4 w-4" />
              <span>Ubud, Bali</span>
            </div>
            <div className={styles.topBarItem}>
              <Clock className="h-4 w-4" />
              <span>Open Daily 8AM - 10PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.mainContent}>
          {/* Logo Section */}
          <a href="#home" className={styles.logo} aria-label="Waroeng Made - Authentic Balinese Restaurant">
            <div className={styles.logoIcon}>
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>Waroeng Made</span>
              <span className={styles.logoSubtitle}>Authentic Balinese Cuisine</span>
            </div>
          </a>

          <div className={styles.actions}>
            <Button variant="outline" className={styles.orderButton}>
              Order Online
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Reserve Table
            </Button>

            <Menu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
