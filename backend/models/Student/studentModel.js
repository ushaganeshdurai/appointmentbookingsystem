import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
  studentUserName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  studentMail: {
    type: String,
    required: true,
  },
  studentPwd:{
    type:String,
    required:true
  }
});

export const Student = mongoose.model("Student", studentSchema);
//
