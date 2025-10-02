import useInteractionObserver from "../../../hooks/useInteractionObserver";
import Hero from "../../layout/Hero";
import styles from './Menu.module.css'

const Menu = () => {
    const menu = [
        {title: 'Nasi Ayam Betutu', description: 'Ayam betutu dengan nasi hangat', price: 'Rp. 30.000', picture: ''},
        {title: 'Sate Lilit', description: 'Sate lilit ikan dengan bumbu khas Bali', price: 'Rp. 25.000', picture: ''},
        {title: 'Nasi Campur', description: 'Nasi campur dengan berbagai lauk pauk Bali', price: 'Rp. 15.000', picture: ''},
    ]
    
    for (let i = 0; i < 12; i++) {
        menu.push(...menu)
        if (menu.length >= 12) break;
    }
    const { ref, isIntersecting } = useInteractionObserver({
        threshold: 0.1,
        rootMargin: '0px'
    });

    return (
        <main ref={ref} className={isIntersecting ? 'visible' : ''}>
            <Hero 
            title="Menu Kami"
            subtitle="Jelajahi Cita Rasa Autentik Bali"
            isButton={false}
            />

            <section className={styles.content}>
                <div className={styles.menuContent}>
                    {menu.map((item, index) => (
                        <div className={styles.menuContainer} key={index}>
                            <div className={styles.menuItem}>
                                <img src={item.picture || '/placeholder.png'} alt="menu.png" />
                                <span className={styles.menuTitle}>{item.title}</span>
                                <span className={styles.menuDescription}>{item.description}</span>
                                <span className={styles.menuPrice}>{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Menu;

