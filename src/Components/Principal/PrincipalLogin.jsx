import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar';

const PrincipalLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://school-backend-po6l.onrender.com/principal/login', { username, password });
            const { token, principal } = response.data;

            // Store token in local storage or context
            localStorage.setItem('token', token);

            // Show success toast
            toast.success(`Welcome ${principal.username}`);

            // Redirect to /principal on successful login
            navigate('/principal');
        } catch (err) {
            // Show error toast
            toast.error(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-zinc-900">
            <Navbar/>
            <div className="w-full max-w-md p-8 bg-zinc-800 shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-4 text-zinc-50 text-center">Principal Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-zinc-50">Username</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 p-2 w-full border border-zinc-700 rounded-md shadow-sm focus:ring-zinc-500 focus:border-zinc-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-zinc-50">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 p-2 w-full border border-zinc-700 rounded-md shadow-sm focus:ring-zinc-500 focus:border-zinc-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-zinc-950 text-zinc-50 font-semibold rounded-md shadow-sm hover:bg-zinc-900 focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default PrincipalLogin;
