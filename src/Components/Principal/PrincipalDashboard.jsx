import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Notices from './Notices';
import Navbar from '../Navbar';

const PrincipalDashboard = () => {
    const [activeMenu, setActiveMenu] = useState('profile');
    const [principal, setPrincipal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            setLoading(true);
            setError('');
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('Unauthorized');
                }
                const response = await axios.get('https://school-backend-po6l.onrender.com/principal/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setPrincipal(response.data.principal);
            } catch (error) {
                console.error('Error fetching profile:', error);
                setError('Error fetching profile. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const renderContent = () => {
        switch (activeMenu) {
            case 'profile':
                if (loading) return <p>Loading profile...</p>;
                if (error) return <p className="text-red-500">{error}</p>;
                return principal ? (
                    <div>
                        <h2>Principal Profile</h2>
                        <p><strong>Username:</strong> {principal.login.username}</p>
                        {/* Add more profile details here */}
                    </div>
                ) : (
                    <p>Profile data not available.</p>
                );
            case 'addNotice':
                return <AddNotice />;
            case 'manage':
                return <p>Manage section <br />
                    <Notices/>
                </p>;
            default:
                return <p>Select a menu option.</p>;
        }
    };

    return (
        <div className="flex min-h-screen">
            <Navbar/>
            <aside className="w-1/4 bg-zinc-950 border-t-[1px] border-zinc-800 text-zinc-50 p-4 mt-12">
                <h2 className="text-lg font-bold mb-4">Dashboard</h2>
                <ul>
                    <li className="mb-2">
                        <button
                            onClick={() => setActiveMenu('profile')}
                            className="w-full text-left"
                        >
                            Profile
                        </button>
                    </li>
                    <li className="mb-2">
                        <button
                            onClick={() => setActiveMenu('addNotice')}
                            className="w-full text-left"
                        >
                            Add Notice
                        </button>
                    </li>
                    <li className="mb-2">
                        <button
                            onClick={() => setActiveMenu('manage')}
                            className="w-full text-left"
                        >
                            Manage
                        </button>
                    </li>
                    {/* Add more menu items here */}
                </ul>
            </aside>
            <main className="w-3/4 mt-12 bg-zinc-800 text-zinc-50 p-8">
                {renderContent()}
            </main>
        </div>
    );
};

const AddNotice = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('You must be logged in to add a notice.');
                return;
            }

            const response = await axios.post(
                'https://school-backend-po6l.onrender.com/api/principal/addNotice', // Replace with your actual endpoint
                { title, content },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setSuccess('Notice added successfully!');
            setTitle('');
            setContent('');
        } catch (err) {
            console.error('Error adding notice:', err);
            setError(err.response?.data?.message || 'An error occurred while adding the notice.');
        }
    };

    return (
        <div >
            <h2>Add Notice</h2>
            <form onSubmit={handleSubmit} className="mt-4 ">
                <div className="mb-4">
                    <label className="block mb-1">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border bg-zinc-600 border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full p-2 border bg-zinc-600 border-gray-300 rounded"
                    ></textarea>
                </div>
                <button type="submit" className="bg-zinc-950 text-white p-2 rounded">
                    Add Notice
                </button>
            </form>
            {success && <p className="text-green-500 mt-2">{success}</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default PrincipalDashboard;
