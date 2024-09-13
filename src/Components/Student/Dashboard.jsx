import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaHome, FaBook, FaCalendarCheck, FaTasks } from 'react-icons/fa';
import axios from 'axios';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';
import HomeworkList from '../Teacher/HomeworkList';

const StudentDashboard = () => {
    const [userName, setUserName] = useState('');
    const [homework, setHomework] = useState([]);
    const [activeSection, setActiveSection] = useState('profile'); // State to manage active section

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));

        if (user && token) {
            setUserName(user.userName);

            // Fetch homework
            axios.get('https://school-backend-po6l.onrender.com/homework', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => setHomework(response.data))
            .catch(error => console.error('Error fetching homework:', error));
        } else {
            setUserName('Guest');
        }
    }, []);

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'homework':
                return (
                    <section>
                        <motion.h2
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-3xl font-semibold mb-4"
                        >
                            Assigned Homework
                        </motion.h2>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="list-disc pl-5 space-y-4"
                        >
                            {homework.length > 0 ? (
                                homework.map(hw => (
                                    <motion.li
                                        key={hw._id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="bg-zinc-900 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                    >
                                        <h3 className="text-xl font-semibold">{hw.title}</h3>
                                        <p>{hw.description}</p>
                                        <p className="text-zinc-400">Due Date: {new Date(hw.dueDate).toLocaleDateString()}</p>
                                    </motion.li>
                                ))
                            ) : (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <HomeworkList/>
                                </motion.p>
                            )}
                        </motion.ul>
                    </section>
                );
            case 'attendance':
                return (
                    <section>
                        <motion.h2
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-3xl font-semibold mb-4"
                        >
                            Attendance Records
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-zinc-900 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            {/* Add your attendance data display here */}
                            <p>No attendance records available.</p>
                        </motion.div>
                    </section>
                );
            case 'tasks':
                return (
                    <section>
                        <motion.h2
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-3xl font-semibold mb-4"
                        >
                            Task List
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-zinc-900 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            {/* Add your task list data display here */}
                            <p>No tasks assigned.</p>
                        </motion.div>
                    </section>
                );
            case 'profile':
            default:
                return (
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <h1 className="text-4xl font-bold mb-4">Welcome, {userName}!</h1>
                        <p className="text-xl mb-6">
                            This is your dashboard. Use the sidebar to navigate to different sections.
                        </p>
                    </motion.div>
                );
        }
    };

    return (
        <div className="flex h-screen bg-zinc-800 text-zinc-50">
            <Navbar />
            {/* Sidebar */}
            <aside className="w-64 pt-12 bg-zinc-900 text-zinc-50 flex flex-col transition-transform duration-300 ease-in-out transform">
                <div className="flex items-center justify-center h-16 bg-zinc-700 shadow-lg">
                    <FaUserCircle className="text-4xl" />
                    <span className="ml-2 text-xl font-semibold">{userName}</span>
                </div>
                <nav className="mt-8">
                    <ul>
                        <motion.li
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="transition duration-300 ease-in-out"
                        >
                            <Link
                                to="/dashboard"
                                className="flex items-center px-4 py-2 hover:bg-zinc-600 rounded-lg"
                                onClick={() => setActiveSection('profile')}
                            >
                                <FaHome className="mr-3 text-lg" />
                                <span>Home</span>
                            </Link>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="transition duration-300 ease-in-out"
                        >
                            <Link
                                to="#"
                                className="flex items-center px-4 py-2 hover:bg-zinc-600 rounded-lg"
                                onClick={() => setActiveSection('attendance')}
                            >
                                <FaCalendarCheck className="mr-3 text-lg" />
                                <span>Attendance</span>
                            </Link>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="transition duration-300 ease-in-out"
                        >
                            <Link
                                to="#"
                                className="flex items-center px-4 py-2 hover:bg-zinc-600 rounded-lg"
                                onClick={() => setActiveSection('homework')}
                            >
                                <FaBook className="mr-3 text-lg" />
                                <span>Homework</span>
                            </Link>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="transition duration-300 ease-in-out"
                        >
                            <Link
                                to="#"
                                className="flex items-center px-4 py-2 hover:bg-zinc-600 rounded-lg"
                                onClick={() => setActiveSection('tasks')}
                            >
                                <FaTasks className="mr-3 text-lg" />
                                <span>Tasks</span>
                            </Link>
                        </motion.li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 mt-12 p-8 overflow-y-auto bg-zinc-800">
                {renderActiveSection()}
            </main>
        </div>
    );
};

export default StudentDashboard;
