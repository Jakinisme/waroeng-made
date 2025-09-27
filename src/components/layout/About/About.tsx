import styles from './About.module.css';
import sate from '../../../assets/sate.png'

const About = () => {
    const images = [
        { src: `${sate}`, alt: 'Traditional Indonesian Dish', text: 'Taste the Tradition' },
        { src: `${sate}`, alt: 'Cozy Dining Area' , text: 'Feel at Home'},
        { src: `${sate}`, alt: 'Fresh Ingredients' , text: 'Freshness in Every Bite'},
        { src: `${sate}`, alt: 'Authentic Indonesian Cuisine', text: 'Authenticity You Can Trust'}
    ]
    return (
        <section className={styles.about}>
            <div className={styles.aboutContent}>
                <div className={styles.aboutImage}>
                    <img src={sate} alt="About Us" />
                </div>

                <div className={styles.aboutText}>
                    <div className={styles.aboutTitle}>
                       <h2 className={styles.aboutTitleText}>About Us</h2>
                       <span className={styles.aboutSubtitle}>Waroeng Made</span>
                    </div>

                    <div className={styles.aboutDescription}>
                      <p className={styles.aboutDescriptionText}>
                        Waroeng Made is a beloved culinary destination that has been serving authentic Indonesian cuisine since its inception. Known for its warm ambiance and traditional flavors, Waroeng Made offers a diverse menu that showcases the rich heritage of Indonesian cooking. From savory ayam betutu to spicy sambal, each dish is crafted with care and passion, ensuring a memorable dining experience for all who visit.
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