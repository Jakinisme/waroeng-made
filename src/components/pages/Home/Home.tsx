import Info from "../../layout/Info";
import Hero from "../../layout/Hero";
import Gallery from "../../layout/Gallery";
import About from "../../layout/About";

import useInteractionObserver from "../../../hooks/useInteractionObserver";

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
            isButton={true}
            />
            <About />
            <Info
            title="Menu Kami"
            descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Gallery
            title="Gallery"
            subtitle="A glimpse into our culinary creations"
            />
        </main>
    )
}

export default Home;