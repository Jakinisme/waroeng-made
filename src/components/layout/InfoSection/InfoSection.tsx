import Button from "../../ui/Button"
import styles from "./Info.module.css"

const Info = () => {
    const menuItem = [
        { title: 'Sate Lilit', description: 'Minced fish satay with Balinese spices', price: 'Rp. 15.000', picture: '/placeholder.jpg' },
        { title: 'Nasi Campur', description: 'Mixed rice with various Balinese side dishes', price: 'Rp. 20.000', picture: '/placeholder.jpg' },
        { title: 'Bebek Betutu', description: 'Slow-cooked duck with traditional spices', price: 'Rp. 25.000', picture: '/placeholder.jpg' },
    ]
    return (
        <section className={styles.info}>
            <div className={styles.infoContent}>
                <span className={styles.infoTitle}>Our Menu</span>
                <p className={styles.infoDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste recusandae nostrum quam animi, eligendi impedit expedita magnam vel porro ab consequatur tenetur, quia, error amet! Minus dicta libero rerum minima?</p>

                <div className={styles.menuCategory}>
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
                    <Button>See Full Menu</Button>
                </div>
            </div>
        </section>
    )
}

export default Info