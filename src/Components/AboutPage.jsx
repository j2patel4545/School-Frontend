import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutPage = () => {
    return (
        <div className="bg-gradient-to-r from-zinc-950 to-zinc-800 text-zinc-50 min-h-screen p-6 md:p-12">
            <Navbar/>
            {/* Header Section */}
            <header className="relative flex items-center justify-center h-[80vh] mb-12 overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[url('/path-to-your-image.jpg')] bg-cover bg-center filter brightness-50"
                />
                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="relative text-5xl md:text-7xl font-bold z-10"
                >
                    About Apna School
                </motion.h1>
            </header>

            {/* Mission and Vision Section */}
            <section className="mb-24 ">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="p-6 bg-zinc-900 rounded-lg shadow-lg"
                    >
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-lg">
                            Our mission is to foster an inclusive, supportive learning environment where students can grow academically, socially, and emotionally. We strive to develop lifelong learners who are prepared to succeed in a dynamic world.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="p-6 bg-zinc-900 rounded-lg shadow-lg"
                    >
                        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                        <p className="text-lg">
                            Our vision is to be a leader in education, inspiring and empowering students to become compassionate, engaged citizens who make positive contributions to society.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* History Section */}
            <section className="mb-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="p-6 bg-zinc-900 rounded-lg shadow-lg"
                    >
                        <h2 className="text-3xl font-bold mb-4">Our History</h2>
                        <p className="text-lg">
                            Established in 1960, our school has a rich history of academic excellence and community involvement. Over the decades, we have evolved to meet the needs of our diverse student body while maintaining our commitment to high standards of education.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative p-6 bg-zinc-900 rounded-lg shadow-lg overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('/path-to-your-history-image.jpg')] bg-cover bg-center filter brightness-50 z-0" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-4">A Legacy of Excellence</h2>
                            <p className="text-lg">
                                From our humble beginnings to our current state-of-the-art facilities, we have always prioritized the needs of our students, providing them with the tools and opportunities to excel.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Meet Our Team Section */}
            <section className="mb-24">
                <motion.h2
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    Meet Our Team
                </motion.h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {[1, 2, 3, 4, 5, 6].map((_, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                            className="p-6 bg-zinc-900 rounded-lg shadow-lg"
                        >
                            <div className="bg-[url('/path-to-your-team-member.jpg')] bg-cover bg-center h-48 w-full rounded-lg mb-6" />
                            <h3 className="text-2xl font-semibold mb-2">Team Member Name</h3>
                            <p className="text-lg text-zinc-400">Position</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="mb-24 text-center">
                <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl font-bold mb-8"
                >
                    Join Us in Shaping the Future
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-lg mb-8"
                >
                    Whether you are a prospective student, parent, or community member, we welcome you to be a part of our story. Together, we can continue to build a bright future for our students.
                </motion.p>
                <motion.a
                    href="#contact"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-block bg-zinc-700 hover:bg-zinc-600 text-zinc-50 text-xl font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out"
                >
                    Contact Us
                </motion.a>
            </section>
            <Footer/>
        </div>
    );
};

export default AboutPage;
