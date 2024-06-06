import mongoose from "mongoose";
import cors from "cors"
import {} from 'dotenv/config'
import express from "express";
import adminRoute from "./routes/adminRoute.js";
import teacherRoute from "./routes/teacherRoute.js"

const port = process.env.port
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded())




//general admin url
app.get("/admin",(req,res)=>{
    console.log(req);
    return res.status(234);
})
app.use("/admin/teachers",adminRoute)
//general teacher url
app.get("/teacher",(req,res)=>{
  console.log(req);
  return res.status(234);
})



app.use("/teacher/scheduleappointment",teacherRoute)

mongoose
  .connect(process.env.MONGOD_URL)
  .then(() => {
    console.log("connected to db");
    app.listen(port, () => {
      console.log(`Server running at ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });


//TODO:FINSIH ADMIN


// //Admin
// Add Teacher
// Name, Department, subject, etc
// Update/Delete Teacher
// Approve Registration Student
