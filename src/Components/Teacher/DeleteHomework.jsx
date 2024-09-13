import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';

const DeleteHomework = () => {
  const [homeworkList, setHomeworkList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all homework on component mount
  useEffect(() => {
    const fetchHomework = async () => {
      try {
        const response = await axios.get('https://school-backend-po6l.onrender.com/teacher/homework');
        setHomeworkList(response.data.homework);
      } catch (err) {
        console.error('Error fetching homework:', err);
        setError('Error fetching homework');
      } finally {
        setLoading(false);
      }
    };

    fetchHomework();
  }, []);

  // Function to handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://school-backend-po6l.onrender.com/teacher/homework/${id}`);
      setHomeworkList(homeworkList.filter(homework => homework._id !== id));
    } catch (err) {
      console.error('Error deleting homework:', err);
      setError('Error deleting homework');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="bg-zinc-800 rounded-md text-zinc-50 min-h-screen p-6">
      {/* <h2 className="text-3xl font-bold text-center mt-16 mb-8">Manage Homework</h2 */}
      {homeworkList.length === 0 ? (
        <p className="text-center">No homework assignments available.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homeworkList.map((homework) => (
            <motion.div
              key={homework._id}
              className="bg-zinc-900 p-4 rounded-lg shadow-lg flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div>
                <h3 className="text-xl font-bold">{homework.title}</h3>
                <p className="text-sm mb-4">{homework.description}</p>
                <p className="text-sm text-gray-400">Due: {new Date(homework.dueDate).toLocaleDateString()}</p>
              </div>
              <button
                className="bg-red-600 text-white py-2 px-4 mt-4 rounded-md hover:bg-red-700 transition-colors duration-300"
                onClick={() => handleDelete(homework._id)}
              >
                Delete
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DeleteHomework;
