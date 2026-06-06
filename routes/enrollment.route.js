import express from "express";
import { enrollStudent, getStudentsByCourse } from "../controllers/enrollment.controller.js";

const router = express.Router();

router.post("/enroll", enrollStudent);
router.get("/course-students/:courseId", getStudentsByCourse);

export default router;