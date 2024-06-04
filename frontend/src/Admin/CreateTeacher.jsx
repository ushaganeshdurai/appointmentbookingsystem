import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Backbutton from '../components/Backbutton';
import Spinner from '../components/Spinner';

const CreateTeacher = () => {
    const [loading, setLoading] = useState(false);
    const [teacherName, setTeacherName] = useState("");
    const [teacherUserName, setTeacherUserName] = useState("");
    const [teacherSubject, setTeacherSubject] = useState("");
    const [teacherDept, setTeacherDept] = useState("");
    const [teacherPwd, setTeacherPwd] = useState("");
    const navigate =useNavigate();
    const handleSaveTeacher = () => {
        const data = {
          teacherName,
          teacherSubject,
          teacherDept,
          teacherPwd,teacherUserName
        };
        console.log('Data to be sent:', data);
        setLoading(true)
        axios.post('http://localhost:5000/admin/teachers', data)
        .then(()=>{
          setLoading(false);
          navigate('/admin')
        })
}
return (
  <div>
    <div className="p-4">
      <Backbutton />
      <h1 className="text-3xl">Create a Teacher</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col rounded-md border-2 border-sky-400 p-4 mx-auto w-[600px]">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Teacher Name</label>
          <input
            type="text"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
            className="p-4 border-2 border-gray-500"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Teacher Username</label>
          <input
            type="text"
            value={teacherUserName}
            onChange={(e) => setTeacherUserName(e.target.value)}
            className="p-4 border-2 border-gray-500"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Teacher Department</label>
          <input
            type="text"
            value={teacherDept}
            onChange={(e) => setTeacherDept(e.target.value)}
            className="p-4 border-2 border-gray-500"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Teacher Subject</label>
          <input
            type="text"
            value={teacherSubject}
            onChange={(e) => setTeacherSubject(e.target.value)}
            className="p-4 border-2 border-gray-500"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Teacher Password</label>
          <input
            type="password"
            value={teacherPwd}
            onChange={(e) => setTeacherPwd(e.target.value)}
            className="p-4 border-2 border-gray-500"
          />
        </div>
        <button onClick={handleSaveTeacher} className="p-2 m-8 bg-sky-500 rounded-sm text-white">
          Save
        </button>
      </div>
    </div>
  </div>
)

}

export default CreateTeacher