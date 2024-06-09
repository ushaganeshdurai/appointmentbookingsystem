import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Backbutton from '../components/Backbutton';
import Spinner from '../components/Spinner';

const CancelAppointment = () => {
  const [loading, setLoading] = useState(false);
  const { teacherUserName, apptid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("DeleteAppointment component rendered");
    console.log("teacherUserName:", teacherUserName);
    console.log("apptid:", apptid);
  }, [teacherUserName, apptid]);

  const handleDelApptmnt = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/teacher/scheduleappointment/${teacherUserName}/viewAppt/cancel/${apptid}`)
      .then(() => {
        setLoading(false);
        navigate(`/teacher/scheduleappointment/${teacherUserName}/viewAppt`);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <div className="p-4">
      <Backbutton />
      <h1>Are you sure you want to cancel this appointment?</h1>
      {loading ? <Spinner /> : null}
      <div className="flex flex-col  items-center rounded-full ">
        <button onClick={handleDelApptmnt} className="bg-red-500 rounded-xl p-5 text-white">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CancelAppointment;
