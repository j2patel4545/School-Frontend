import React, { useState } from 'react';
import axios from 'axios';

const AddNotice = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous messages
        setError('');
        setSuccess('');

        try {
            // Get the token from localStorage or state
            const token = localStorage.getItem('token');

            // Check if token is available
            if (!token) {
                setError('You must be logged in to add a notice.');
                return;
            }

            // Make POST request to add notice
            const response = await axios.post(
                'https://school-backend-po6l.onrender.com/principal/notice/add', // Replace with your actual endpoint
                { title, content },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            // Handle response
            setSuccess('Notice added successfully!');
            setTitle('');
            setContent('');
        } catch (err) {
            // Handle errors
            console.error('Error adding notice:', err);
            setError(err.response?.data?.message || 'An error occurred while adding the notice.');
        }
    };

    return (
        <div className="max-w-md mx-auto my-8 p-4 border rounded-lg shadow-lg ">
            <h1 className="text-xl font-semibold mb-4">Add Notice</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-3 py-2 border bg-zinc-900 text-zinc-950 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-gray-700">Content</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        rows="4"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Add Notice
                </button>
                {success && <p className="mt-4 text-green-500">{success}</p>}
                {error && <p className="mt-4 text-red-500">{error}</p>}
            </form>
        </div>
    );
};

export default AddNotice;
