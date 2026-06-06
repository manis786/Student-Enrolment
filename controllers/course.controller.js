import config from "../config/config.js"
import Course from "../models/course.models.js"
import { errorRes, successRes } from "../lib/responseHandler.js"


const registercourse = async (req, res) => {
    try {
        const { title, description, fee, duration } = req.body

        const existingCourse = await Course.findOne({ title })
        if (existingCourse) {
            return errorRes(res, 400, false, "This Course is already Exists", null)
        }
        const newStudent = await Course.create({
            title,
            description,
            fee,
            duration

        })
        successRes(res, 201, true, "Course Added Successfully!", null)

    } catch (error) {
        errorRes(res, 400, false, error.message || "Something Went Wrong while Adding Course", null)
    }
}
const getAllcourses = async (req, res) => {
    try {
        const courses = await Course.find()
        successRes(res, 400, true, "All Courses Details are Fethced", courses)
    } catch (error) {
        errorRes(res, 400, false, error.message || "Something Went Wrong while Fetching Data", null)
    }
}
const getcoursebyId = async (req, res) => {
    try {
        const { courseId } = req.params
        const courseData = await Course.findById(courseId)
        if (!courseData) {
            errorRes(res, 400, false, "Invalid Student ID", null)
        }
        successRes(res, 200, true, "Data Fetched with ID", courseData)
    } catch (error) {
        errorRes(res, 400, false, error.message || "Something Went Wrong while Fetching Data", null)

    }
}

const updatecourse = async (req, res) => {
    try {
        const { courseId } = req.params
        const { title, description, fee, duration } = req.body
        if (!title || !description || !fee || !duration) {
            return errorRes(res, 400, false, "Error while updaing your request", null)
        }
        const updatecourse = await Course.findByIdAndUpdate(courseId, {
            title,
            description,
            fee,
            duration
        }, { new: true })
        successRes(res, 200, false, "Student Details Updated", updatecourse)

    } catch (error) {
        errorRes(res, 400, false, error.message || "Something went Wrong", null)
    }
}
const deletecourse = async (req, res) => {
    try {
        const { courseId } = req.params
        const response = await Course.findByIdAndDelete(courseId)
        successRes(res, 200, false, "Student Details deleted", null)

    } catch (error) {
        errorRes(res, 400, false, error.message || "Something went Wrong", null)

    }
}
export { getcoursebyId, registercourse, getAllcourses, updatecourse, deletecourse }
