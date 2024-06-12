import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ScheduleAppointment from './Teacher/ScheduleAppointment.jsx'
import './index.css'
import ViewAppointments from './Teacher/ViewAppointments.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import TeacherLogin from './Teacher/TeacherLogin.jsx'
import TeacherPage from './Teacher/TeacherPage.jsx'
import Student from './Student/Student.jsx'
import CreateTeacher from './Admin/CreateTeacher.jsx'
import UpdateTeacher from './Admin/UpdateTeacher.jsx'
import DeleteTeacher from './Admin/DeleteTeacher.jsx'
import Admin from './Admin/Admin.jsx'
import CancelAppointment from './Teacher/CancelAppointment.jsx'
import StudentRegistered from './Student/StudentRegistered.jsx'
import StudentLogin from './Student/StudentLogin.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    //common route
    <Route path="/" element={<App />} />


    //teacher routes
    <Route path="/teacher" element={<TeacherLogin />} />
    <Route path="/teacher/scheduleappointment/:teacherUserName" element={<TeacherPage />} />
    <Route path="/teacher/scheduleappointment/:teacherUserName/scheduleappt" element={<ScheduleAppointment/>} />
    <Route path="/teacher/scheduleappointment/:teacherUserName/viewAppt" element={<ViewAppointments/>} />
    <Route path="/teacher/scheduleappointment/:teacherUserName/viewAppt/cancel/:apptid" element={<CancelAppointment />} />


//admin routes
    <Route path="/admin" element={<Admin />} />
    <Route path="/admin/teachers/create" element={<CreateTeacher />} />
    {/* <Route path="/admin/teachers/details/:id" element={<ShowTeacher />} /> */}
    <Route path="/admin/teachers/edit/:id" element={<UpdateTeacher />} />
    <Route path="/admin/teachers/delete/:id" element={<DeleteTeacher />} />


//student routes
    <Route path="/student/studentcreate" element={<Student />} />
    <Route path="/student/login/" element={<StudentLogin />} />
    <Route path="/student/:studentUserName" element={<StudentRegistered />} />
  </Routes>
  </BrowserRouter>
)
