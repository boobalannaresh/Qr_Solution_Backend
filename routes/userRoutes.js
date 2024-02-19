import express from "express";
const router = express.Router();

// importing all controlles
import { register, login, ActivateCourseByID, getUsersByID, getAllUser} from "../controllers/userControlers.js";

// post method
router.post("/register", register);

// post method
router.post("/login", login);

router.put("/activatebyid/:id", ActivateCourseByID);

router.get("/getbyid/:id", getUsersByID);

router.get("/getalluser", getAllUser)

export default router;