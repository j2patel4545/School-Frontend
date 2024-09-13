import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Notices() {
  const [notices, setNotices] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('https://school-backend-po6l.onrender.com/principal/notices'); // Replace with your actual API endpoint
        setNotices(response.data.notices);
      } catch (err) {
        console.error('Error fetching notices:', err);
        setError('Failed to load notices. Please try again later.');
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="p-6 bg-zinc-700 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Notices</h2>
      {error && <p className="text-red-500">{error}</p>}
      {notices.length > 0 ? (
        <ul className="space-y-4">
          {notices.map((notice) => (
            <li
              key={notice._id}
              className="p-4 bg-zinc-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{notice.title}</h3>
              <p className="text-sm text-zinc-50 mb-1">Date: {new Date(notice.createdAt).toLocaleDateString()}</p>
              <p className="text-zinc-300 mb-4">{notice.content}</p>
              <p className="text-zinc-400 text-sm">Created by: {notice.createdBy?.name || 'Unknown'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No notices available</p>
      )}
    </div>
  );
}

export default Notices;
