import styles from './Footer.module.css'

import useIntersectionObserver from "../../../hooks/useInteractionObserver"

const Footer = () => {
    const widget = [
        { title: 'Waroeng Made', about: 'Waroeng Made menghadirkan cita rasa autentik Bali dalam suasana hangat dan bersahabat. Nikmati hidangan khas Pulau Dewata dari ayam betutu yang gurih hingga sambal pedas penuh rasa semua diolah dengan cinta untuk pengalaman bersantap yang tak terlupakan.', isAbout: true},
        { title: 'Jam Buka', about: 'Senin - Sabtu', isHours: true },
        { title: 'Hubungi Kami', about: 'Phone: +62 812 2355 69222' }
    ]
    const hour = [
        { day: 'Senin', time: '6:00 - 11:00' },
        { day: 'Selasa', time: '6:00 - 11:00' },
        { day: 'Rabu', time: '6:00 - 11:00' },
        { day: 'Kamis', time: '6:00 - 11:00' },
        { day: 'Jumat', time: '6:00 - 11:00' },
        { day: 'Sabtu', time: '6:00 - 11:00' },
    ]

    const { ref, isIntersecting } = useIntersectionObserver({
                threshold: 0.5,
                rootMargin: '0px 0px -50px 0px',
                triggerOnce: true
            })

    return (
        <footer className={`${styles.footer} ${(isIntersecting ? styles.visible : '')}`} ref={ref}>
            <div className={styles.container}>
              {widget.map((item, index) => (
               <div className={styles.content} key={index}>
                 <div className={styles.contentWidget}>

                     <h2 className={styles.title}>{item.title}</h2>
                     {item.isAbout ? <p className={styles.description}>{item.about}</p>
                      : <span className={styles.description}>{item.about}</span>}

                     {item.isHours &&
                      <ul>
                        {hour.map((item, index) => (
                            <li key={index} className={styles.hoursItem}>
                                <span className={styles.day}>{item.day}</span>
                                <span className={styles.time}>{item.time}</span>
                            </li>
                        ))}
                      </ul>
                     }
                 </div>
               </div>
                ))}

                <span className={styles.copyright}>copyright &copy; {new Date().getFullYear()} Waroeng Made - All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;