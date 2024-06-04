import mongoose from "mongoose";
const teacherSchema = new mongoose.Schema({
  Subject: {
    type: String,
    required: true,
  },
  date: {
    type:Date,
    required: true,
  },
  timings:{
type:Date
  },
  
});

export const Teacher = mongoose.model("Teacher", teacherSchema);
