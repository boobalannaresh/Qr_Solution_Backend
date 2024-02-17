
import express from "express";
const router = express.Router();

// importing all controlles
import {
    getCourses,
    getCoursesByID,
    createCourses,
    deleteCoursesByID,
    updateCourseByID,
    ActivateCourseByID
} from "../controllers/courseControllers.js";
import jwt from "jsonwebtoken";


const auth = (req, res, next)=> {
    try{
       
const getToken = req.header("x-token")

const roleId = req.header("roleId")
req.roleId = roleId

jwt.verify(getToken, "students")
next()
    }catch(error){
console.log(error.message)
    }
}

// get methods

// Fectch all movies
router.get("/get", getCourses);

// Fectch movie by ID
router.get("/getbyid/:id", getCoursesByID);

// post methods

// creating movie in DB
router.post("/post", createCourses);

// delete methods

// delete movie by ID
router.delete("/deletebyid/:id", auth, deleteCoursesByID);

// put methods

// Edit movie by ID
router.put("/updatebyid/:id", updateCourseByID);

router.put("/activatebyid/:id", ActivateCourseByID);

export default router;


