import React from 'react'
import Backbutton from '../components/Backbutton'
import { useState,useEffect } from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'



const DeleteTeacher = () => {


  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams(); //get id
  const handleDeleteTeacher = () => {
    setloading(true);
    axios
      .delete(`http://localhost:5000/admin/teachers/${id}`)
      .then(() => {
        setloading(false);
        navigate("/admin");
      })
      .catch((error) => {
        setloading(fasle);
        console.log(error);
      });
  };




  return (
    <div className="p-4 flex items-center">
    <Backbutton/>
    <h1>Delete a teacher</h1>
    {loading?<Spinner/>:' '}

      <button onClick={handleDeleteTeacher} className="bg-red-500 p-4 flex items-center text-white">Delete</button>
    
  </div>
  )
}

export default DeleteTeacher