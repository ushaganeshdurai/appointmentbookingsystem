import express from "express";
const app = express.Router();
import { Teacher } from "../models/Teacher/teacherModel.js";
import { Admin } from "../models/Admin/adminModel.js";
import bcrypt from "bcrypt";
//common route: student

// Route to create a new student and save
app.post("/", async (req, res) => {
  try {
    const { studentUserName, studentPwd,studentMail } = req.body;

    if (!studentUserName || !studentPwd) {
      return res.status(400).send({ message: "All fields are required" });
    }

    const stdusername = await Admin.findOne({ studentUserName });

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

app.post("/:studentUserName/bookappt", async (req, res) => {
  const { username, student, studentMail } = req.body;
  console.log(req.body);
  try {
    const newAppointment = new Teacher({
      username,
      student,
      studentMail,
    });
    const savedAppointment = await newAppointment.save();
    console.log("saved appointment");
    return res.status(201).send(savedAppointment);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});

//Route to get info about single teacher by ID

app.get("/:teacherUserName/viewAppt", async (req, res) => {
  try {
    const { teacherUserName } = req.params;
    console.log(teacherUserName);
    // const teacher = await Teacher.findOne({username:teacherUserName});
    const teacher = await Teacher.find({ username: teacherUserName });

    if (!teacher) {
      return res.status(404).send({ message: "teacher not found" });
    }

    return res.status(200).json(teacher);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});



// Route to delete an appointment by ID
app.delete("/:teacherUserName/viewAppt/cancel/:apptid", async (req, res) => {
  try {
    const { teacherUserName } = req.params;
    const { apptid } = req.params;
    const deletedAppointment = await Teacher.findByIdAndDelete(apptid);

    if (!deletedAppointment) {
      return res.status(404).send({ message: "Teacher not found" });
    }

    return res.status(200).send({ message: "Teacher deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
});

export default app;
