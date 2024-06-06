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

  const handleSaveAppointment = () => {
    const data = {
      subject,
      date,
      timings,
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
    <div>
      Pick a date:
      <div className="max-w-[8rem] mx-auto">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

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

        <div className="mb-6">
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
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            className="bg-black text-white m-8 p-8 rounded-full"
            onClick={handleSaveAppointment}
          >
            {" "}
            SCHEDULE APPOINTMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
