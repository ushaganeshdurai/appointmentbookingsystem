import React from 'react'
import CreateTeacher from './CreateTeacher'
import UpdateTeacher from './UpdateTeacher'
import {useState,useEffect} from "react"
import axios from 'axios'
import Spinner from './Spinner'
import { Link } from 'react-router-dom'
import DeleteTeacher from './DeleteTeacher'
import {MdOutlineAddBox }from "react-icons/md"
import {AiOutlineEdit,AiOutlineDelete} from "react-icons/ai"

const Admin = () => {

  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5000/admin/teachers')
      .then((response) => {
        setTeachers(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);


  return (<>
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1>Teachers List</h1>
        <Link to="/admin/teachers/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full">
          <thead>
            <tr>
              <th className=" rounded-md max-md:hidden">Teacher Name</th>
              <th className=" rounded-md">Teacher Department</th>
              <th className=" rounded-md max-md:hidden">Teacher Subject</th>
              <th className=" rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr key={teacher._id}>
                <td className=" rounded-md text-center">{teacher.teacherName}
                </td>
                <td className=" rounded-md text-center max-md:hidden">{teacher.teacherDepartment}</td>
                <td className=" rounded-md text-center max-md:hidden">{teacher.teacherSubject}</td>
                <td className=" rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/admin/teachers/edit/${teacher._id}`}>
                      <AiOutlineEdit />
                    </Link>
                    <Link to={`/admin/teachers/delete/${teacher._id}`}>
                      <AiOutlineDelete />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </>
  )
}

export default Admin




{/* <CreateTeacher />
    <UpdateTeacher />
    <DeleteTeacher /> */}



    // <Route path="/admin" element={<Admin />} />
    // <Route path="/admin/teachers/create" element={<CreateTeacher />} />
    // <Route path="/admin/teachers/details/:id" element={<ShowTeacher />} />
    // <Route path="/admin/teachers/edit/:id" element={<UpdateTeacher />} />
    // <Route path="/admin/teachers/delete/:id" element={<DeleteTeacher />} />.









    //TODO: GET back here..