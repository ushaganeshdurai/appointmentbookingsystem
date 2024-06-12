import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";
const ScheduleAppointment = () => {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [timings, setTime] = useState("");
  const [date, setDate] = useState("");
  const [username, setTeacherUserName] = useState("");
  const [studentMail, setStudentMail] = useState("");
  const [student, setStudentName] = useState("");

  const handleSaveAppointment = () => {
    const data = {
      subject,
      date,
      timings,
      username,student,studentMail
    };
    console.log(data);
    axios
      .post("http://localhost:5000/teacher/scheduleappointment/${teacherUserName}/scheduleappt", data)
      .then(() => {
        setLoading(false);
        navigate("/teacher");
      });
  };

  return (
    


<div class="max-w-sm p-6 bg-white border ml-[400px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter date
          </label>
<input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
         <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter timings
          </label>
<input
          value={timings}
          onChange={(e) => setTime(e.target.value)}
          type="time"
          id="time"
          className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          min="09:00"
          max="18:00"
          required
        />
    <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter subject name
          </label>
    <input
            type="text"
            id="large-input"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mb-3 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
<label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter student name
          </label>
    <input
            type="text"
            id="large-input"
            value={student}
            onChange={(e) => setStudentName(e.target.value)}
            className="mb-3 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
<label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter student mail id
          </label>
    <input
            type="text"
            id="large-input"
            value={studentMail}
            onChange={(e) => setStudentMail(e.target.value)}
            className="mb-3 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />


           <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter user name
          </label>
           <input
            type="text"
            id="large-input"
            value={username}
            onChange={(e) => setTeacherUserName(e.target.value)}
            className="mb-3 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
    <button onClick={handleSaveAppointment} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Schedule Appointment
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
</div>

  );
};

export default ScheduleAppointment;
