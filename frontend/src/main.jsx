import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Teacher from './components/Teacher.jsx'
import Student from './components/Student.jsx'
import CreateTeacher from './components/CreateTeacher.jsx'
import ShowTeacher from "./components/ShowTeacher.jsx"
import DeleteTeacher from './components/DeleteTeacher.jsx'
import UpdateTeacher from "./components/UpdateTeacher.jsx"
import Admin from './components/Admin.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/teacher" element={<Teacher />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/admin/teachers/create" element={<CreateTeacher />} />
    <Route path="/admin/teachers/details/:id" element={<ShowTeacher />} />
    <Route path="/admin/teachers/edit/:id" element={<UpdateTeacher />} />
    <Route path="/admin/teachers/delete/:id" element={<DeleteTeacher />} />
    <Route path="/student" element={<Student />} />
  </Routes>
  </BrowserRouter>
)
