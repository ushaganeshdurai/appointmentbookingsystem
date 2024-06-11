import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
  teacherName: {
    type: String,
    required: true,
  },
  teacherSubject: {
    type: String,
    required: true,
  },
  teacherDept: {
    type: String,
    required: true,
  },
  teacherPwd: {
    type: String,
    required: true,
  },
  teacherUserName: {
    type: String,
    required: true,
  },
  studentPwd: {
    type: String,
    required: true,
  },
  studentUserName: {
    type: String,
    required: true,
  },
  studentMail: {
    type: String,
    required: true,
  },
});

export const Admin = mongoose.model("Admin", adminSchema);
