import React from 'react'
import {Link} from "react-router-dom"


const App = () => {
  return (
<>
<div className="text-center p-10">
    <h1 className="font-bold text-white text-4xl mb-4">Choose a role:</h1>
</div>


<div id="Projects"
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <Link to="/admin">
            <img src="https://png.pngtree.com/png-vector/20221124/ourmid/pngtree-recruitment-job-for-social-media-admin-png-image_6478542.png"
                    alt="Role" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">Administrator</p>
                <div className="flex items-center">
                    <ul className="text-lg font-semibold text-gray-600 cursor-auto my-3">
                        <li>🌟Add teacher</li>
                        <li>🌟Update/Delete Teacher</li>
                        <li>🌟Approve student</li>
                    </ul>
                </div>
            </div>
        </Link>
    </div>
  
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <Link to="/teacher">
            <img src="https://static.vecteezy.com/system/resources/previews/004/654/732/non_2x/young-woman-teacher-teaching-cartoon-character-free-vector.jpg"
                    alt="Role" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">Teacher</p>
                <div className="flex items-center">
                    <ul className="text-lg font-semibold text-gray-600 cursor-auto my-3">
                        <li>🌟Schedule appointment</li>
                        <li>🌟Approve appointment</li>
                        <li>🌟Cancel appointment</li>
                    </ul>
                </div>
            </div>
        </Link>
    </div>
    
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="/student/studentcreate">
            <img src="https://img.freepik.com/free-vector/cute-happy-smiling-child-isolated-white-background_1308-68855.jpg"
                    alt="Role" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">Student</p>
                <div className="flex items-center">
                    <ul className="text-lg font-semibold text-gray-600 cursor-auto my-3">
                        <li>🌟Search Teacher</li>
                        <li>🌟Book appointment</li>
                        <li>🌟Send message</li>
                    </ul>
                </div>
            </div>
        </a>
    </div>
</div></>
)
}

export default App