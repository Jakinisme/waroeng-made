import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { useInteractionObserver } from "../../../hooks";

const Contact = () => {
    const { ref, isIntersecting } = useInteractionObserver({
        threshold: 0.1,
        rootMargin: '0px'
    });

    return (
        <main ref={ref} className={isIntersecting ? 'visible' : ''}>
            <section className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-800 mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Get in touch with us for reservations, orders, or any questions
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                                Get In Touch
                            </h2>
                            
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <Phone className="h-6 w-6 text-amber-600 mr-4 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                                        <p className="text-gray-600">0812-3456-789</p>
                                        <p className="text-sm text-gray-500">For orders and reservations</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <MapPin className="h-6 w-6 text-amber-600 mr-4 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Address</h3>
                                        <p className="text-gray-600">Jl. Raya Tuban No. 123</p>
                                        <p className="text-gray-600">Tuban, Jawa Timur 62319</p>
                                        <p className="text-sm text-gray-500">Indonesia</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Clock className="h-6 w-6 text-amber-600 mr-4 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Opening Hours</h3>
                                        <p className="text-gray-600">Monday - Sunday</p>
                                        <p className="text-gray-600">8:00 AM - 10:00 PM</p>
                                        <p className="text-sm text-gray-500">Open daily</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="h-6 w-6 text-amber-600 mr-4 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                                        <p className="text-gray-600">info@waroengmade.com</p>
                                        <p className="text-sm text-gray-500">For general inquiries</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    Quick Actions
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                                        Order Online
                                    </button>
                                    <button className="border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors">
                                        Reserve Table
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                                Send us a Message
                            </h2>
                            
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                            placeholder="Your first name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                            placeholder="Your last name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                        placeholder="0812-3456-789"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="reservation">Table Reservation</option>
                                        <option value="order">Food Order</option>
                                        <option value="catering">Catering Service</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                        placeholder="Tell us how we can help you..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
