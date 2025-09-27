import { useInteractionObserver } from "../../../hooks";

const Gallery = () => {
    const { ref, isIntersecting } = useInteractionObserver({
        threshold: 0.1,
        rootMargin: '0px'
    });


    //const galleryItems = [
    //    { id: 1, title: "Traditional Balinese Interior", description: "Our cozy dining area with authentic Balinese decor" },
    //    { id: 2, title: "Fresh Ingredients", description: "Locally sourced vegetables and spices" },
    //    { id: 3, title: "Signature Dishes", description: "Our most popular menu items" },
    //    { id: 4, title: "Kitchen Team", description: "Our talented chefs preparing your meals" },
    //    { id: 5, title: "Dining Experience", description: "Comfortable seating for families and groups" },
    //    { id: 6, title: "Cultural Elements", description: "Traditional Balinese art and decorations" }
    //];
    return (
        <main ref={ref} className={isIntersecting ? 'visible' : ''}>
            <section className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-16">
                <div>
                    halo
                </div>
            </section>
        </main>
    );
};

export default Gallery;

