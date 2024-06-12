import express from "express";
import { Teacher } from "../models/Teacher/teacherModel.js";
import bcrypt from "bcrypt";
import { Student } from "../models/Student/studentModel.js";


const app = express.Router();

// Route to create a new student and save
app.post("/", async (req, res) => {
  try {
    const { studentUserName, studentPwd } = req.body;
    console.log(studentUserName, studentPwd);

    if (!studentUserName || !studentPwd) {
      return res.status(400).send({ message: "All fields are required" });
    }

    const stdusername = await Student.findOne({ studentUserName });

    if (!stdusername) {
      return res.status(401).send({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(studentPwd, stdusername.studentPwd);

    if (isMatch) {
      return res.status(200).send({
        message: "Authentication successful",
        studentUserName: stdusername.studentUserName,
      });
    } else {
      return res.status(401).send({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error.message });
  }
});

// Route to get all students
app.get("/", async (req, res) => {
  try {
    const students = await Student.find({});
    return res.status(200).json({
      count: students.length,
      data: students,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

// Route to get available teachers based on subject
app.post("/bookapt", async (req, res) => {
  const { subject } = req.body;
  console.log(req.body);
  try {
    if (!subject) {
      return res.status(400).send({ message: "Subject is required" });
    }
    const availableSubjects = await Teacher.find({ subject: subject });
    console.log("Found available subjects", availableSubjects);
    return res.status(200).send(availableSubjects);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});

export default app;
