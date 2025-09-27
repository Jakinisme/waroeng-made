import { useInteractionObserver } from "../../../hooks";

const About = () => {
    const { ref, isIntersecting } = useInteractionObserver({
        threshold: 0.1,
        rootMargin: '0px'
    });

    return (
        <main ref={ref} className={isIntersecting ? 'visible' : ''}>
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
                <div className="max-w-4xl mx-auto px-6 py-16">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-800 mb-6">
                            About Waroeng Made
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover the authentic flavors of Bali in the heart of Tuban, Jawa Timur
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                                Our Story
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Waroeng Made was born from a passion for authentic Balinese cuisine and a desire to share 
                                the rich culinary traditions of Indonesia with our community. Our founder, Made, grew up 
                                in a small village in Bali where cooking was not just a skill, but a way of life passed 
                                down through generations.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Every dish we serve tells a story of tradition, family, and the vibrant culture of Bali. 
                                We use only the freshest local ingredients and traditional cooking methods to ensure 
                                that every bite transports you to the beautiful island of Bali.
                            </p>
                            <p className="text-gray-600">
                                Today, we're proud to bring these authentic flavors to Tuban, creating a bridge between 
                                cultures through the universal language of food.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Our Values
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-amber-500 mr-3">✓</span>
                                    <span className="text-gray-600">Authentic recipes passed down through generations</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-500 mr-3">✓</span>
                                    <span className="text-gray-600">Fresh, locally sourced ingredients</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-500 mr-3">✓</span>
                                    <span className="text-gray-600">Traditional cooking methods and techniques</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-500 mr-3">✓</span>
                                    <span className="text-gray-600">Warm hospitality and family atmosphere</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-500 mr-3">✓</span>
                                    <span className="text-gray-600">Commitment to quality and consistency</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
