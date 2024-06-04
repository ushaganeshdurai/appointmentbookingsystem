import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import TeacherLogin from './Teacher/TeacherLogin.jsx'
import ScheduleAppointment from './Teacher/ScheduleAppointment.jsx'

import Student from './components/Student.jsx'
import CreateTeacher from './Admin/CreateTeacher.jsx'
import UpdateTeacher from './Admin/UpdateTeacher.jsx'
import DeleteTeacher from './Admin/DeleteTeacher.jsx'
import Admin from './Admin/Admin.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/teacher" element={<TeacherLogin />} />
    <Route path="/teacher/scheduleappointment/:teacherUserName" element={<ScheduleAppointment />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/admin/teachers/create" element={<CreateTeacher />} />
    {/* <Route path="/admin/teachers/details/:id" element={<ShowTeacher />} /> */}
    <Route path="/admin/teachers/edit/:id" element={<UpdateTeacher />} />
    <Route path="/admin/teachers/delete/:id" element={<DeleteTeacher />} />
    <Route path="/student" element={<Student />} />
  </Routes>
  </BrowserRouter>
)
