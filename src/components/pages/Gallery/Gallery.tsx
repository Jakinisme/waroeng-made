import { useInteractionObserver } from "../../../hooks";

const Gallery = () => {
    const { ref, isIntersecting } = useInteractionObserver({
        threshold: 0.1,
        rootMargin: '0px'
    });

    // Placeholder gallery items - in a real app, these would come from a CMS or API
    const galleryItems = [
        { id: 1, title: "Traditional Balinese Interior", description: "Our cozy dining area with authentic Balinese decor" },
        { id: 2, title: "Fresh Ingredients", description: "Locally sourced vegetables and spices" },
        { id: 3, title: "Signature Dishes", description: "Our most popular menu items" },
        { id: 4, title: "Kitchen Team", description: "Our talented chefs preparing your meals" },
        { id: 5, title: "Dining Experience", description: "Comfortable seating for families and groups" },
        { id: 6, title: "Cultural Elements", description: "Traditional Balinese art and decorations" }
    ];

    return (
        <main ref={ref} className={isIntersecting ? 'visible' : ''}>
            <section className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-800 mb-6">
                            Gallery
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Take a visual journey through our restaurant and see what makes Waroeng Made special
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="h-64 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white text-2xl">📸</span>
                                        </div>
                                        <p className="text-gray-600 text-sm">Image Placeholder</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Visit Us Today
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Experience the authentic atmosphere and flavors of Bali right here in Tuban
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                                    View Full Menu
                                </button>
                                <button className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors">
                                    Make Reservation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Gallery;
