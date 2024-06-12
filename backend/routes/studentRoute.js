import express from "express";
const app = express.Router();
import { Teacher } from "../models/Teacher/teacherModel.js";
import { Admin } from "../models/Admin/adminModel.js";
import bcrypt from "bcrypt";
import { Student } from "../models/Student/studentModel.js";
//common route: student/login
//common route: student/:studentUserName

// Route to create a new student and save
app.post("/", async (req, res) => {
  try {
    const { studentUserName, studentPwd} = req.body;
    console.log(studentUserName,studentPwd);

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

app.get("/bookapt", async (req, res) => {
  const { subject } = req.body;
  console.log(req.body);
  try {
    const availablesubjects = await Teacher.find({subject:subject});
    console.log("found available subjects");
    return res.status(200).send(availablesubjects);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});



export default app;
