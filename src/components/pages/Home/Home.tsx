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
            />
            <About />
            <Info />
            <Gallery
            title="Our Gallery"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste recusandae nostrum quam animi, eligendi impedit expedita magnam vel porro ab consequatur tenetur, quia, error amet! Minus dicta libero rerum minima?"
            ></Gallery>
        </main>
    )
}

export default Home;