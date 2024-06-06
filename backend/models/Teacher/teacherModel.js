import mongoose from "mongoose";
const teacherSchema = new mongoose.Schema({
  username:{
    type:String
  },
  subject: {
    type: String,
    required: true,
  },
  date: {
    type:Date,
    required: true,
  },
  timings:{
type:String,required:true
  },
  
});

export const Teacher = mongoose.model("Teacher", teacherSchema);
