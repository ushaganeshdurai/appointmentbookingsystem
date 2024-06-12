import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const TeacherPage = () => {
    const navigate = useNavigate();
    const {teacherUserName}=useParams();
    const handlelogout=()=>{
navigate("/teacher");
    }
  return (
    <div>
      <h1>Choose an action:</h1>
      <div id="Projects"
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <Link to={`/teacher/scheduleappointment/${teacherUserName}/scheduleappt`}>
            <img src="https://i.pinimg.com/736x/ef/64/8f/ef648fe0c7232614bbdef5870c5d8eab.jpg"
                    alt="Role" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">Schedule an appiontment</p>
            </div>
        </Link>
    </div>
  
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <Link to={`/teacher/scheduleappointment/${teacherUserName}/viewAppt`}>
            <img src="https://as2.ftcdn.net/v2/jpg/01/99/85/21/1000_F_199852162_WgY30vcUYKczx9MmcG7SRJSUBfeSWcQt.jpg"
                    alt="Role" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">View all appointments</p>

            </div>
        </Link>
    </div>
    
</div>
<button className='bg-black p-8 rounded-lg text-white relative ml-[450px]'  onClick={handlelogout}>LOG OUT</button>
    </div>


  )
}

export default TeacherPage