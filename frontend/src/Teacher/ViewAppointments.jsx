import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewAppointments = () => {
  const { teacherUserName } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (teacherUserName) {
      console.log(`Fetching appointments for username: ${teacherUserName}`);
      setLoading(true);
      axios
        .get(`http://localhost:5000/teacher/scheduleappointment/${teacherUserName}/viewAppt`)
        .then((response) => {
          console.log("Response received:", response.data);
          setTeacher(response.data); // Set the teacher object
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError('Failed to fetch appointments');
          setLoading(false);
        });
    }
  }, [teacherUserName]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!teacher) {
    return <p>No appointments found.</p>;
  }

  return (
    <div>
      <label htmlFor="">Subject Chosen</label>
      <h1 className="rounded-md text-center">{teacher.subject}</h1>
      <label htmlFor="">Scheduled date</label>
      <h1 className="rounded-md text-center max-md:hidden">{teacher.date}</h1>
      <label htmlFor="">Timings:</label>
      <h1 className="rounded-md text-center max-md:hidden">{teacher.timings}</h1>
    </div>
  );
};

export default ViewAppointments;
