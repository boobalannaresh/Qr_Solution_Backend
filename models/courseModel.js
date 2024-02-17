
import mongoose from "mongoose";

// Creating schema
const courseSchema =  mongoose.Schema(
    // Adding the fielleds and their type
    {
      name: { type: String, required: true },
      pic: { type: String, required: true },
      video: { type: String, required: true },
      duration: { type: Number, required: true },
      tech: { type: String, required: true },
      activate:[ {type: String } ] 
   
    },
    // Adding time stramps which used save datas timings entered in DB
    {
      timestamps: true,
    }
  );

  // Exporting schema
const Course = mongoose.model("Course", courseSchema);
export default Course;