import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomeworkList = () => {
    const [homeworks, setHomeworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHomeworks = async () => {
            try {
                const response = await axios.get('https://school-backend-po6l.onrender.com/teacher/homework');
                setHomeworks(response.data.homework); // Assuming the homework array is inside response.data.homework
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch homework assignments');
                setLoading(false);
            }
        };

        fetchHomeworks();
    }, []);

    if (loading) return <p className="text-zinc-50">Loading...</p>;
    if (error) return <p className="text-zinc-50">{error}</p>;

    return (
        <div className="homework-list rounded-2xl bg-zinc-700 min-h-screen p-6">
            <h2 className="text-3xl text-zinc-50 mb-4"> </h2>
            {homeworks.length === 0 ? (
                <p className="text-zinc-50">No homework assignments found.</p>
            ) : (
                <ul className="space-y-4">
                    {homeworks.map((homework) => (
                        <li key={homework._id} className="bg-zinc-800 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl text-zinc-50">{homework.title}</h3>
                            <p className="text-zinc-400">{homework.description}</p>
                            <p className="text-zinc-400">Due Date: {new Date(homework.dueDate).toLocaleDateString()}</p>
                            <p className="text-zinc-400">Assigned By: {homework.assignedBy?.teacherName}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HomeworkList;
