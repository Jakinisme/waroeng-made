import { useEffect } from "react"
import { Link } from "react-router-dom"

import useInteractionObserver from "../../../hooks/useInteractionObserver"
import useTypewriter from "../../../hooks/useTypewriter"

import Button from "../../ui/Button"
import styles from "./Info.module.css"

import crown from '../../../assets/crown.png'
import sateImage from '../../../assets/sate.png'

interface descriptionProps {
    title: string
    descriptionText?: string
}

const Info = (props: descriptionProps) => {
    const { title, descriptionText } = props

    const { ref, isIntersecting } = useInteractionObserver({
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
        triggerOnce: true
    })
    
    const { displayText: typewriterDescription, startTyping: startDescriptionTyping, isComplete } = useTypewriter({
        text: descriptionText || '',
        speed: 30,
        infinite: false,
        delay: 500,
    })

    useEffect(() => {
        if (isIntersecting && !isComplete) {
            startDescriptionTyping()
        }
    }, [isIntersecting, isComplete, startDescriptionTyping])
    
    const menuItem = [
        { title: 'Sate Lilit', description: 'Minced fish satay with Balinese spices', price: 'Rp. 25.000', picture: `${sateImage}` },
        { title: 'Nasi Campur', description: 'Mixed rice with various Balinese side dishes', price: 'Rp. 15.000', picture: `${sateImage}` },
        { title: 'Ayam Betutu', description: 'Slow-cooked chicken with traditional spices', price: 'Rp. 30.000', picture: `${sateImage}` },
    ]
    return (
        <section ref={ref} className={`${styles.info} ${isIntersecting ? styles.visible : ''}`}>
            <div className={styles.infoContent}>
                <span className={styles.infoTitle}>{title}</span>
                <p className={styles.infoDescription}>
                    {typewriterDescription}
                    {!isComplete && <span className={styles.cursor}>|</span>}
                </p>

                <div className={styles.menuCategory}>
                    <div className={styles.bestMenuContainer}>
                        <img src={crown} alt="crown" className={styles.crownImage} />
                        <span className={styles.bestMenuTitle}>Best Menu</span>
                        <div className={styles.bestItem}>
                            <img src={sateImage} alt="best food"/>
                            <span className={styles.bestItemTitle}>{menuItem[0].title}</span>
                            <span className={styles.bestItemDescription}>{menuItem[0].description}</span>
                            <span className={styles.bestItemPrice}>{menuItem[0].price}</span>
                        </div>
                    </div>
                    {menuItem.map((item, index) => (
                        <div className={styles.container} key={index}>
                            <div className={styles.menuItem}>
                                <img src={item.picture} alt="this is menu.png" />
                                <span className={styles.menuTitle}>{item.title}</span>
                                <span className={styles.menuDescription}>{item.description}</span>
                                <span className={styles.menuPrice}>{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.infoCta}>
                    <Link to="/menu">
                        <Button className={styles.infoCtaButton}>See All Menu</Button>
                    </Link>
                </div>
            </div>

            <div
               className={styles.motif}
               aria-hidden="true"
             />
        </section>
    )
}

export default Info