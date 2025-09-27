import { useInteractionObserver } from "../../../hooks";

const Menu = () => {
    const { ref, isIntersecting } = useInteractionObserver({
        threshold: 0.1,
        rootMargin: '0px'
    });

    const menuItems = [
        {
            category: "Appetizers",
            items: [
                { name: "Gado-Gado", description: "Fresh vegetables with peanut sauce", price: "25,000" },
                { name: "Lumpia Semarang", description: "Crispy spring rolls with sweet sauce", price: "20,000" },
                { name: "Sate Ayam", description: "Grilled chicken skewers with peanut sauce", price: "30,000" }
            ]
        },
        {
            category: "Main Courses",
            items: [
                { name: "Nasi Goreng", description: "Traditional Indonesian fried rice", price: "35,000" },
                { name: "Rendang", description: "Slow-cooked beef in coconut curry", price: "45,000" },
                { name: "Ayam Betutu", description: "Balinese spiced chicken", price: "40,000" },
                { name: "Bebek Betutu", description: "Slow-cooked duck with Balinese spices", price: "50,000" }
            ]
        },
        {
            category: "Vegetarian",
            items: [
                { name: "Tempe Mendoan", description: "Crispy tempeh with sweet soy sauce", price: "25,000" },
                { name: "Sayur Lodeh", description: "Coconut vegetable curry", price: "30,000" },
                { name: "Tahu Telur", description: "Tofu and egg with sweet sauce", price: "28,000" }
            ]
        },
        {
            category: "Desserts",
            items: [
                { name: "Klepon", description: "Sweet rice balls with palm sugar", price: "15,000" },
                { name: "Es Campur", description: "Mixed ice dessert with fruits", price: "20,000" },
                { name: "Pisang Goreng", description: "Fried banana with honey", price: "18,000" }
            ]
        }
    ];

    return (
        <main ref={ref} className={isIntersecting ? 'visible' : ''}>
            <section className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-800 mb-6">
                            Our Menu
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover the authentic flavors of Bali with our carefully crafted menu
                        </p>
                    </div>

                    <div className="space-y-12">
                        {menuItems.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-8">
                                <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                                    {category.category}
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {category.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex justify-between items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                                    {item.name}
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <div className="text-right ml-4">
                                                <span className="text-lg font-bold text-amber-600">
                                                    Rp {item.price}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Ready to Order?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Call us at 0812-3456-789 or visit our restaurant in Tuban, Jawa Timur
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                                    Order Online
                                </button>
                                <button className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors">
                                    Reserve Table
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Menu;
