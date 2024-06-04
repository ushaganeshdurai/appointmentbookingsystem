import express from "express"
const app = express.Router();
import { Teacher } from "../models/Teacher/teacherModel.js";
import { Admin } from "../models/Admin/adminModel.js";
import bcrypt from 'bcrypt'


// Route to create a new teacher and save
app.post("/", async (req, res) => {
  try {
    const { teacherUserName, teacherPwd } = req.body;

    if (!teacherUserName || !teacherPwd) {
      return res.status(400).send({ message: "All fields are required" });
    }

    const tusername = await Admin.findOne({ teacherUserName });

    if (!tusername) {
      return res.status(401).send({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(teacherPwd, tusername.teacherPwd);

    if (isMatch) {
      return res.status(200).send({ message: "Authentication successful", teacherUserName: tusername.teacherUserName });
    } else {
      return res.status(401).send({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error.message });
  }
  });


  // Route to get all teachers
app.get("/", async (req, res) => {
    try {
      const teachers = await Admin.find({});
      return res.status(200).json({
        count: teachers.length,
        data: teachers,
      });
    } catch (error) {
      console.log(error.message);
      return res.status(500).send({ message: error.message });
    }
  });


  //Route to get info about single teacher by ID

  app.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const teacher = await Admin.findById(id);
  
      if (!teacher) {
        return res.status(404).send({ message: "teacher not found" });
      }
  
      return res.status(200).json(teacher);
    } catch (error) {
      console.log(error.message);
      return res.status(500).send({ message: error.message });
    }
  });



// Route to update a teacher by ID

  app.put("/:id", async (req, res) => {
    try {
        const { teacherName,teacherSubject,teacherDept } = req.body;
  
      if (!teacherDept || !teacherName || !teacherSubject) {
        return res.status(400).send({ message: "All fields are required" });
      }
  
      const { id } = req.params;
      const updatedTeacher = await Admin.findByIdAndUpdate(id, {
        teacherName,teacherDept,teacherSubject
      }, { new: true });
  
      if (!updatedTeacher) {
        return res.status(404).send({ message: "Teacher not found" });
      }
  
      return res.status(200).send(updatedTeacher);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: error.message });
    }
  });



// Route to delete a book by ID
app.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedTeacher = await Admin.findByIdAndDelete(id);
  
      if (!deletedTeacher) {
        return res.status(404).send({ message: "Teacher not found" });
      }
  
      return res.status(200).send({ message: "Teacher deleted successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: error.message });
    }
  });
  
  export default app;
  
//TODO:GET BACK HERE