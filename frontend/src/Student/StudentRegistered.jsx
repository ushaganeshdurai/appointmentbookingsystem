import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const StudentRegistered = () => {
  const [subject, setSubject] = useState('');
  const [teachers, setTeachers] = useState([]);
  const { studentUserName } = useParams();

  const handleSearching = async () => {
    try {
      const response = await axios.get(`/student/${studentUserName}/bookappt`);
      if (Array.isArray(response.data)) {
        setTeachers(response.data);
      } else {
        setTeachers([]);
      }
    } catch (error) {
      console.error('Error fetching teachers:', error);
      setTeachers([]);
    }
  };

  useEffect(() => {
    if (subject) {
      handleSearching();
    }
  }, [subject]);

  return (
    <>
      <div className="relative bg-gray-900 block p-4 border border-gray-100 rounded-lg max-w-sm mx-auto mt-24">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <div className="my-4">
          <h2 className="text-white text-2xl font-bold pb-2">Search for subjects</h2>
          <p className="text-gray-300 py-1">Find your free subject to get allocated</p>
        </div>
        <div className="my-4">
          <input type="search" value={subject} className='text-black text-2xl font-bold pb-2' onChange={(e) => setSubject(e.target.value)} />
        </div>
        <div className="flex justify-end">
          <button className="px-2 py-1 text-white border border-gray-200 font-semibold rounded hover:bg-gray-800" onClick={handleSearching}>Search</button>
        </div>
      </div>

      {teachers.length > 0 && (
        <div className="mt-4">
          <h2 className="text-white text-2xl font-bold">Teachers for {subject}</h2>
          <ul className="text-gray-300">
            {teachers.map((teacher, index) => (
              <li key={index}>{teacher.name}</li>
            ))}
          </ul>
        </div>
      )}

      {teachers.length === 0 && (
        <div className="mt-4 text-white">No teachers found for {subject}</div>
      )}
    </>
  );
};

export default StudentRegistered;
