import Info from "../../layout/InfoSection";
import Hero from "../../layout/HeroSection";
import { useInteractionObserver } from "../../../hooks";

const Home = () => {
    const { ref, isIntersecting } = useInteractionObserver({
        threshold: 0.1,
        rootMargin: '0px'
    });

    return (
        <main ref={ref} className={isIntersecting ? 'visible' : ''}>
            <Hero 
            title="Waroeng Made"
            subtitle="Authentic Balinese Cuisine"
            />
            <Info />
        </main>
    )
}

export default Home;