import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

const ViewAppointments = () => {
  const { teacherUserName } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apps, setApps] = useState([]);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (teacherUserName) {
      console.log(`Fetching appointments for username: ${teacherUserName}`);
      setLoading(true);
      axios
        .get(`http://localhost:5000/teacher/scheduleappointment/${teacherUserName}/viewAppt`)
        .then((response) => {
          console.log("Response received:", response.data);
          if (Array.isArray(response.data)) {
            setApps(response.data);
            console.log("Appointments data:", response.data);
          } else {
            setError('Invalid response format');
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError('Failed to fetch appointments');
          setLoading(false);
        });
    }
  }, [teacherUserName]);


  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

 

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!apps.length) {
    return <p>No appointments found.</p>;
  }

  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th className="rounded-md max-md:hidden">Subject</th>
            <th className="rounded-md">Date</th>
            <th className="rounded-md max-md:hidden">Timings</th>
            <th className="rounded-md max-md:hidden">Student's email id</th>
            <th className="rounded-md max-md:hidden">Student's name</th>
            <th className="rounded-md">Operations</th>
          </tr>
        </thead>
        <tbody>
          {apps.map((apptmnt) => (
            <tr key={apptmnt._id}>
              <td className="rounded-md text-center">{apptmnt.subject}</td>
              <td className="rounded-md text-center">{apptmnt.date}</td>
              <td className="rounded-md text-center max-md:hidden">{apptmnt.timings}</td>
              <td className="rounded-md text-center max-md:hidden">{apptmnt.studentMail}</td>
              <td className="rounded-md text-center max-md:hidden">{apptmnt.student}</td>
              <td className="rounded-md text-center">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/teacher/scheduleappointment/${teacherUserName}/viewAppt/cancel/${apptmnt._id}`}>
                    <AiOutlineDelete />
                  </Link>
                  <a href={`mailto:${apptmnt.studentMail}?subject=Appointment Reminder&body=Dear ${apptmnt.student},\n\nThis is a reminder for your upcoming appointment for ${apptmnt.subject} on ${apptmnt.date} at ${apptmnt.timings}.`}>
                    <AiOutlineMail />
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <form  onSubmit={handleEmailSubmit}>
        <input  className='block mb-3'
          type="email" 
          placeholder="Student's email" 
          value={email} 
          onChange={handleEmailChange} 
          required 
        />
        <textarea  className='block mb-3'
          placeholder="Your message" 
          value={message} 
          onChange={handleMessageChange} 
          required
        ></textarea>
        <input type="submit" className='bg-black text-white p-6' value="Send" />
      </form> */}
    </>
  );
};

export default ViewAppointments;
