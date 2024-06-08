import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewAppointments = () => {
  const {username}=useParams();
  const [Appt, setAppt] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("useParams output:", username);

    if (username){
      console.log(`Fetching appointments for username: ${username}`);
      setLoading(true);
    axios
      .get(`http://localhost:5000/teacher/scheduleappointment/${username}/viewAppt`)
      .then((response) => {
        console.log("Response receied:",response.data);
        setAppt(response.data); // Assuming response.data is an array of appointments
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });}
  },[username]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        Appt.map((apps) => (
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
