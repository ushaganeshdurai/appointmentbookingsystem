import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewAppointments = () => {
  const { teacherUserName } = useParams();
  const [Appt, setAppt] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/teacher/scheduleappointment/${teacherUserName}/viewAppt`)
      .then((response) => {
        setAppt(response.data.data); // Assuming response.data is an array of appointments
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [teacherUserName]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        Appt.map((apps, index) => (
          <div key={apps._id}>
            <h1 className="rounded-md text-center">{apps.subject}</h1>
            <h1 className="rounded-md text-center max-md:hidden">{apps.date}</h1>
            <h1 className="rounded-md text-center max-md:hidden">{apps.timings}</h1>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewAppointments;
