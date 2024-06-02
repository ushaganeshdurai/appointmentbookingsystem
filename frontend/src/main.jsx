import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Teacher from './components/Teacher.jsx'
import Admin from './components/Admin.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowswerRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/teacher" element={<Teacher />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/student" element={<Student />} />
  </Routes>
  </BrowswerRouter>
)
