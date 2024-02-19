import Course from "../models/courseModel.js";
import { ObjectId } from "mongodb";

// Fectch all movies
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json({ courses });
  } catch (error) {
    return res.status(500).send({ error });
  }
};

// creating movie in DB
export const createCourses = async (req, res) => {
  // Spliting data from req.bady to multiple varibles
  const { name, pic, video, duration, tech } = req.body;
  const courses = await Course.create({
    name,
    pic,
    video,
    duration,
    tech,
  });
  if (courses) {
    res.status(201).json({
      message: "Course added successfully ",
    });
  } else {
    // if movie is not created saying movie is not created
    res.status(400);
    throw new Error("failed to create");
  }
};

// Fectch course by ID
export const getCoursesByID = async (req, res) => {
  try {
    const { id } = req.params;
    const courses = await Course.findOne({ _id: new ObjectId(id) });
    res.status(200).json({ courses });
  } catch (error) {
    return res.status(500).send({ error });
  }
};

// delete movie by ID
const ROLE_ID = {
  Admin:"0",
  Student: "1"
}

export const deleteCoursesByID = async (req, res) => {
  try {
    const { id } = req.params
    
    const { roleId } = req;
   
  
    if (roleId === ROLE_ID.Admin){
      const deleteCourse = await Course.deleteOne({ _id: new ObjectId(id) });
      
      deleteCourse.deletedCount > 0 
      ? res.send({ message: "Data Deleted Successfully" })
      : res.status(404).send({ message: "Data Not Found" });
    }else{
      res.status(401).send({ message: "Unauthorized"});
    }
    
  } catch (error) {
    return res.status(500).send({ error });
  }
};

// Edit movie by ID
export const updateCourseByID = async (req, res) => {
  // Spliting data from req.bady to multiple varibles
  const { name, pic, video, duration, tech } = req.body;
  const { id } = req.params;
  const course = await Course.updateOne(
    { _id: new ObjectId(id) },
    {
      name,
      pic,
      video,
      duration,
      tech,
    }
  );
  if (course) {
    res.status(201).json({
      course,
    });
  } else {
    // if movie is not updated saying movie is not created
    res.status(400);
    throw new Error("failed to create");
  }
};


// // Edit movie by ID
// export const ActivateCourseByID = async (req, res) => {
//   // Spliting data from req.bady to multiple varibles

//   const { id } = req.params;

//   const course = await Course.findOneAndUpdate(
//     { _id: new ObjectId(id) },
//     {
//       $push: {activate:id}
//     }
//   );
//   if (course) { 
//     res.status(201).json(course);
//   } else {
//     // if movie is not updated saying movie is not created
//     res.status(400);
//     throw new Error("failed to create");
//   }
// };
 