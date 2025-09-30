import styles from './About.module.css';
import sate from '../../../assets/sate.png'
import useIntersectionObserver from '../../../hooks/useInteractionObserver';

const About = () => {
    const images = [
        { src: `${sate}`, alt: 'Traditional Indonesian Dish', text: 'Rasakan Tradisi' },
        { src: `${sate}`, alt: 'Cozy Dining Area' , text: 'Nyaman Seperti di Rumah'},
        { src: `${sate}`, alt: 'Fresh Ingredients' , text: 'Segar di Setiap Gigitan'},
        { src: `${sate}`, alt: 'Authentic Indonesian Cuisine', text: 'Keaslian yang Terpercaya'}
    ]

    const { ref, isIntersecting } = useIntersectionObserver({
            threshold: 0.5,
            rootMargin: '0px 0px -50px 0px',
            triggerOnce: true
        })
    
    return (
        <section className={`${styles.about} ${(isIntersecting ? styles.visible : '')}`} ref={ref} aria-label="About Us Section">
            <div className={styles.aboutContent}>
                <div className={styles.aboutImage}>
                    <img src={sate} alt="About Us" />
                </div>

                <div className={styles.aboutText}>
                    <div className={styles.aboutTitle}>
                       <h2 className={styles.aboutTitleText}>Tentang Kami</h2>
                       <span className={styles.aboutSubtitle}>Waroeng Made</span>
                    </div>

                    <div className={styles.aboutDescription}>
                      <p className={styles.aboutDescriptionText}>
                        Waroeng Made menghadirkan cita rasa autentik Bali dalam suasana hangat dan bersahabat. Nikmati hidangan khas Pulau Dewata dari ayam betutu yang gurih hingga sambal pedas penuh rasa semua diolah dengan cinta untuk pengalaman bersantap yang tak terlupakan.
                      </p>
                    </div>

                  <div className={styles.aboutGrid}>
                    {images.map((image, index) => (
                        <div key={index} className={styles.aboutGridItem}>
                            <img src={image.src} alt={image.alt} className={styles.aboutGridImage} />
                            <span className={styles.slogan}>{image.text}</span>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    )
}

export default About;