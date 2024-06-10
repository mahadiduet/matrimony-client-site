
const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
            <header className="py-12">
                <h1 className="text-4xl font-bold text-center">Contact Us</h1>
                <p className="text-center mt-4 text-lg">
                    We'd love to hear from you! Reach out to us with any questions or feedback.
                </p>
            </header>
            <section className="py-12 px-4 sm:px-8 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white text-black rounded-lg p-8 shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                        <p className="mb-4">
                            <strong>Email:</strong> support@matrimony.com
                        </p>
                        <p className="mb-4">
                            <strong>Phone:</strong> +1 (555) 123-4567
                        </p>
                        <p className="mb-4">
                            <strong>Address:</strong> 123 Love Lane, Romance City, CA 12345
                        </p>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-500 hover:text-blue-700">
                                <i className="fab fa-facebook fa-2x"></i>
                            </a>
                            <a href="#" className="text-blue-400 hover:text-blue-600">
                                <i className="fab fa-twitter fa-2x"></i>
                            </a>
                            <a href="#" className="text-pink-600 hover:text-pink-800">
                                <i className="fab fa-instagram fa-2x"></i>
                            </a>
                            <a href="#" className="text-blue-700 hover:text-blue-900">
                                <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                        </div>
                    </div>
                    <div className="bg-white text-black rounded-lg p-8 shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Message</label>
                                <textarea
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
                                    rows="4"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;