import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  student: {
    type: String,
    required: true,
  },
  studentMail: {
    type: String,
    required: true,
  },
});

export const Student = mongoose.model("Student", studentSchema);
//
