import { useEffect } from "react"
import { useInteractionObserver, useTypewriter } from "../../../hooks"
import Button from "../../ui/Button"
import styles from "./Info.module.css"

const Info = () => {
    const { ref, isIntersecting } = useInteractionObserver({
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    })

    const descriptionText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste recusandae nostrum quam animi, eligendi impedit expedita magnam vel porro ab consequatur tenetur, quia, error amet! Minus dicta libero rerum minima?"
    
    const { displayText: typewriterDescription, startTyping: startDescriptionTyping, isComplete } = useTypewriter({
        text: descriptionText,
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
        { title: 'Sate Lilit', description: 'Minced fish satay with Balinese spices', price: 'Rp. 15.000', picture: '/placeholder.jpg' },
        { title: 'Nasi Campur', description: 'Mixed rice with various Balinese side dishes', price: 'Rp. 20.000', picture: '/placeholder.jpg' },
        { title: 'Bebek Betutu', description: 'Slow-cooked duck with traditional spices', price: 'Rp. 25.000', picture: '/placeholder.jpg' },
    ]
    return (
        <section ref={ref} className={`${styles.info} ${isIntersecting ? styles.visible : ''}`}>
            <div className={styles.infoContent}>
                <span className={styles.infoTitle}>Our Menu</span>
                <p className={styles.infoDescription}>
                    {typewriterDescription}
                    {!isComplete && <span className={styles.cursor}>|</span>}
                </p>

                <div className={styles.menuCategory}>
                    {menuItem.map((item, index) => (
                        <div ref={ref} className={`${styles.container} ${isIntersecting ? styles.visible : ''}`} key={index}>
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
                    <Button>See All Menu</Button>
                </div>
            </div>
        </section>
    )
}

export default Info