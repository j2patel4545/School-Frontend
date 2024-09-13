import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import image1 from './aa.png'; // Ensure this path is correct

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://school-backend-po6l.onrender.com/user/Login', {
                email,
                password
            });

            toast.success('Login successful! Redirecting to dashboard...');

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            setTimeout(() => {
                navigate('/dashboard');
            }, 2000);
        } catch (error) {
            console.error('Login error:', error);
            toast.error('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div className="flex min-h-screen bg-zinc-800 text-zinc-50">
            <Navbar/>
            <div className="flex-1 flex items-center justify-center lg:justify-start p-8 lg:p-16">
                <div className="w-full max-w-md bg-zinc-900 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="block w-full px-4 py-2 border border-zinc-600 rounded-md shadow-sm bg-zinc-800 text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition duration-300 ease-in-out"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="block w-full px-4 py-2 border border-zinc-600 rounded-md shadow-sm bg-zinc-800 text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition duration-300 ease-in-out"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-white text-zinc-800 py-2 px-4 rounded-md shadow-sm border border-zinc-600 hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-700 transition duration-300 ease-in-out"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
            <div className="hidden lg:flex flex-1 bg-cover bg-center justify-center items-center relative">
                <div className="absolute inset-0 justify-center items-center bg-zinc-800 opacity-50">
                <img src={image1} alt="Background" className="absolute inset-0 justify-center mt-44 ml-36 items-center object-cover w-3/5 h-3/5" />

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
