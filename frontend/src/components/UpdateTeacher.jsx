import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Spinner from './Spinner'
import Backbutton from './Backbutton'
const UpdateTeacher = () => {
  const [teacherDept, setTeacherDept] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherSubject, setTeacherSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/admin/teachers${id}`)
      .then((response) => {
        setTeacherDept(response.data.teacherDept);
        setTeacherName(response.data.teacherName);
        setTeacherSubject(response.data.teacherSubject);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);


  const handleEditTeacher = () => {
    const data = {
      teacherName,
          teacherSubject,
          teacherDept
    };
    setLoading(true);
    //to access books use post
    axios
      .put(`http://localhost:5000/admin/teachers${id}`, data)
      .then(() => {
        setLoading(true);
        navigate("/admin");
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  };






  return (
    <div className="p-4">
    <Backbutton />
    <h1 className="text-3xl">Update a teacher details</h1>
    {loading ? <Spinner /> : " "}
    <div className="flex flex-col rounded-md border-2 border-sky-400 p-4 mx-auto w-[600]">
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
        <label className="text-xl mr-4 text-gray-500">Teacher's Department</label>
        <input
          type="text"
          value={teacherDept}
          onChange={(e) => setTeacherDept(e.target.value)}
          className="p-4 border-2 border-gray-500"
        />
      </div>
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Teaching Subject</label>
        <input
          type="text"
          value={teacherSubject}
          onChange={(e) => setTeacherSubject(e.target.value)}
          className="p-4 border-2 border-gray-500"
        />
      </div>
      <button
        className="p-2 m-8 bg-sky-500 text-white"
        onClick={handleEditTeacher}
      >
        Save
      </button>
    </div>
  </div>
  )
}

export default UpdateTeacher