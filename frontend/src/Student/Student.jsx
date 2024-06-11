import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"


const Student = () => {

const [studentMail,setStudentMail]=useState("");
const [studentPwd,setStudentPwd]=useState("");
const [studentUserName,setStudentUserName]=useState("");
const [name,setStudentName]=useState("");
const [loading,setLoading] = useState(false);
const navigate = useNavigate();


  const handleAuthStudent = async () => {
    const data = {
      studentUserName,
      name,
      studentPwd,
      studentMail
    };
    console.log('Data to be sent:', data);
    setLoading(true);
  
    try {
      const response = await axios.post('http://localhost:5000/student/studentcreate', data);
      setLoading(false);
  
      if (response.status === 200) {
        const { studentUserName } = response.data;
        console.log(studentUserName);
        navigate(`/student/${studentUserName}`);
      } else {
        console.error('Authentication failed:', response.data);

      }
    } catch (error) {
      setLoading(false);
      console.error('Error during authentication:', error.response ? error.response.data.message : error.message);
    }
  };





  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
  
          Registration  
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <div className="space-y-4 md:space-y-6">
              <div>
                      <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Your name</label>
                      <input type="text" onChange={(e) => setStudentName(e.target.value)} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={name} placeholder="Your name" required={true} />
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Your email</label>
                      <input type="email" onChange={(e) => setStudentMail(e.target.value)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={studentMail} placeholder="name@gmail.com" required={true} />
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Your username</label>
                      <input type="text" onChange={(e) => setStudentUserName(e.target.value)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={studentUserName} placeholder="Your user name" required={true} />
                  </div>
                  <div>
                      <label htmlFor="password"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password"onChange={(e)=>setStudentPwd(e.target.value)} value={studentPwd} name="password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}/>
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required={true}/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleAuthStudent}>Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </div>
          </div>
      </div>
  </div>
</section>
    </>
  )
}

export default Student