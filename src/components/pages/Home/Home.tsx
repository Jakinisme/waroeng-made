import Info from "../../layout/Info";
import Hero from "../../layout/Hero";
import Gallery from "../../layout/Gallery";

import image from '../../../const/image.json'

import useInteractionObserver from "../../../hooks/useInteractionObserver";

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
            <Gallery
            title="Our Gallery"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste recusandae nostrum quam animi, eligendi impedit expedita magnam vel porro ab consequatur tenetur, quia, error amet! Minus dicta libero rerum minima?"
            images={image}
            ></Gallery>
        </main>
    )
}

export default Home;