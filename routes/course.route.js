import express from "express"
import Course from "../models/course.models.js"
import { getcoursebyId, registercourse, getAllcourses, updatecourse, deletecourse } from "../controllers/course.controller.js"

const router = express.Router()

router.route("/addcourse").post(registercourse)
router.route("/getcourses").get(getAllcourses)
router.route("/course/:courseId").get(getcoursebyId)
router.route("/course/:courseId").put(updatecourse)
router.route("/course/:courseId").delete(deletecourse)


export default router