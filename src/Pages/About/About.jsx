
const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white">
            <header className="py-12">
                <h1 className="text-4xl font-bold text-center">About Us</h1>
                <p className="text-center mt-4 text-lg">
                    Learn more about our mission, vision, and the team behind our success.
                </p>
            </header>
            <section className="py-12 px-4 sm:px-8 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white text-black rounded-lg p-8 shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p>
                            Our mission at Matrimony is to connect individuals seeking meaningful and lasting relationships. We provide a trusted platform where people can find compatible partners, fostering love, happiness, and lifelong companionship. Our commitment is to ensure every user has a positive and fulfilling matchmaking experience.
                        </p>
                    </div>
                    <div className="bg-white text-black rounded-lg p-8 shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                        <p>
                            Our vision at Matrimony is to be the premier platform for finding true love, fostering a community where individuals connect and thrive in meaningful relationships. We aim to innovate continually, providing the most reliable and personalized matchmaking experience, ensuring every journey leads to a fulfilling partnership.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-12 px-4 sm:px-8 lg:px-16 bg-gradient-to-r from-purple-600 via-blue-500 to-green-300">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Meet the Team</h2>
                    <p className="mt-4 text-lg">
                        Our team of professionals is dedicated to achieving our mission and vision.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="bg-white text-black rounded-lg p-8 shadow-lg">
                        <img
                            src="https://i.ibb.co/CtYGrpr/300X300.jpg"
                            alt="Team Member"
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2">Emam</h3>
                        <p className="text-gray-600">CEO</p>
                    </div>
                    <div className="bg-white text-black rounded-lg p-8 shadow-lg">
                        <img
                            src="https://i.ibb.co/CtYGrpr/300X300.jpg"
                            alt="Team Member"
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2">Mahadi</h3>
                        <p className="text-gray-600">CTO</p>
                    </div>
                    <div className="bg-white text-black rounded-lg p-8 shadow-lg">
                        <img
                            src="https://i.ibb.co/CtYGrpr/300X300.jpg"
                            alt="Team Member"
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2">Hasan</h3>
                        <p className="text-gray-600">COO</p>
                    </div>
                </div>
            </section>
            <footer className="py-8 bg-black text-center">
                <p className="text-white">
                    © {new Date().getFullYear()} Our Company. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default About;