import Info from "../../layout/Info";
import Hero from "../../layout/Hero";
import { useInteractionObserver } from "../../../hooks";

const Home = () => {
    console.log('home loaded')
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