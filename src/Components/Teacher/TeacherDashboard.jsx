import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import DeleteHomework from './DeleteHomework';

const TeacherDashboard = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [teacherName, setTeacherName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTeacherProfile = async () => {
            const token = localStorage.getItem('teacherToken');
            try {
                const response = await axios.get('https://school-backend-po6l.onrender.com/teacher/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setTeacherName(response.data.teacherName);
            } catch (error) {
                console.error('Error fetching teacher profile:', error);
            }
        };

        fetchTeacherProfile();
    }, []);

    const handleAddHomework = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('teacherToken');

        try {
            await axios.post(
                'https://school-backend-po6l.onrender.com/teacher/homework/add',
                { title, description, dueDate },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            toast.success('Homework added successfully!');
            setTitle('');
            setDescription('');
            setDueDate('');
        } catch (error) {
            console.error('Error adding homework:', error);
            toast.error('Failed to add homework. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-zinc-900 text-zinc-50 flex flex-col p-6 lg:p-12">
            <Navbar/>
            <div className="flex pt-12 justify-between items-center mb-8">
                <div className="flex items-center space-x-4">
                    <span className="text-xl font-semibold">{teacherName}</span>
                </div>
                <button
                    onClick={() => navigate('/teacher-profile')}
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                    Profile
                </button>
            </div>

            <div className="flex pt-12 flex-col lg:flex-row gap-6">
                <div className="flex-1 bg-zinc-800 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">Add Homework</h2>
                    <form onSubmit={handleAddHomework}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                className="mt-1 block w-full px-4 py-2 border border-zinc-600 rounded-md bg-zinc-700 text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                rows="4"
                                className="mt-1 block w-full px-4 py-2 border border-zinc-600 rounded-md bg-zinc-700 text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Due Date</label>
                            <input
                                type="date"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                required
                                className="mt-1 block w-full px-4 py-2 border border-zinc-600 rounded-md bg-zinc-700 text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                        >
                            Add Homework
                        </button>
                    </form>
                </div>

                <div className="flex-1 bg-zinc-800 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">Notes</h2>
                    <p>
                        <DeleteHomework/>
                    </p>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default TeacherDashboard;
