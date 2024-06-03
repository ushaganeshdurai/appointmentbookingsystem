import express from "express"
const app = express.Router();
import {Admin} from "../models/Admin/adminModel.js"


// Route to create a new teacher and save
app.post("/", async (req, res) => {
    try {
      console.log(req.body);
      const { teacherName,teacherSubject,teacherDept } = req.body;
  
      if (!teacherSubject || !teacherName || !teacherDept ) {
        return res.status(400).send({ message: "All fields are required" });
      }
  
      const newTeacher = new Admin({
       teacherName,
       teacherSubject,
       teacherDept
      });
  
      const savedTeacher = await newTeacher.save();
      return res.status(201).send(savedTeacher);
    } catch (error) {
      console.log(error);
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
  