import { useInteractionObserver } from "../../../hooks";

const Menu = () => {
    const { ref, isIntersecting } = useInteractionObserver({
        threshold: 0.1,
        rootMargin: '0px'
    });

  // const menuItems = [
  //     {
  //         category: "Appetizers",
  //         items: [
  //             { name: "Gado-Gado", description: "Fresh vegetables with peanut sauce", price: "25,000" },
  //             { name: "Lumpia Semarang", description: "Crispy spring rolls with sweet sauce", price: "20,000" },
  //             { name: "Sate Ayam", description: "Grilled chicken skewers with peanut sauce", price: "30,000" }
  //         ]
  //     },
  //     {
  //         category: "Main Courses",
  //         items: [
  //             { name: "Nasi Goreng", description: "Traditional Indonesian fried rice", price: "35,000" },
  //             { name: "Rendang", description: "Slow-cooked beef in coconut curry", price: "45,000" },
  //             { name: "Ayam Betutu", description: "Balinese spiced chicken", price: "40,000" },
  //             { name: "Bebek Betutu", description: "Slow-cooked duck with Balinese spices", price: "50,000" }
  //         ]
  //     },
  //     {
  //         category: "Vegetarian",
  //         items: [
  //             { name: "Tempe Mendoan", description: "Crispy tempeh with sweet soy sauce", price: "25,000" },
  //             { name: "Sayur Lodeh", description: "Coconut vegetable curry", price: "30,000" },
  //             { name: "Tahu Telur", description: "Tofu and egg with sweet sauce", price: "28,000" }
  //         ]
  //     },
  //     {
  //         category: "Desserts",
  //         items: [
  //             { name: "Klepon", description: "Sweet rice balls with palm sugar", price: "15,000" },
  //             { name: "Es Campur", description: "Mixed ice dessert with fruits", price: "20,000" },
  //             { name: "Pisang Goreng", description: "Fried banana with honey", price: "18,000" }
  //         ]
  //     }
  // ];

    return (
        <main ref={ref} className={isIntersecting ? 'visible' : ''}>
            <section className=''>
                <div>
                    alaszwo
                </div>
            </section>
        </main>
    );
};

export default Menu;
