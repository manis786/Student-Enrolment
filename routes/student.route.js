import express from "express"
import Students from "../models/student.models.js"
import { getAllStudents, registerStudent, getStudentbyId, updateStudent, deleteStudent } from "../controllers/student.controller.js"

const router = express.Router()

router.route("/register").post(registerStudent)
router.route("/getallstudents").get(getAllStudents)
router.route("/student/:studentId").get(getStudentbyId)
router.route("/student/:studentId").put(updateStudent)
router.route("/student/:studentId").delete(deleteStudent)


export default router