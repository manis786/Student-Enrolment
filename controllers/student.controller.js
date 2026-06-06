import config from "../config/config.js"
import Student from "../models/student.models.js"
import { errorRes, successRes } from "../lib/responseHandler.js"
import Students from "../models/student.models.js"


const registerStudent = async (req, res) => {
    try {
        const { studentName, email, phoneNo } = req.body

        const existingStudent = await Student.findOne({ email })
        if (existingStudent) {
            return errorRes(res, 400, false, "This Emails is already Exists", null)
        }
        const newStudent = await Students.create({
            studentName,
            email,
            phoneNo
        })
        successRes(res, 201, true, "Student Added Successfully!", null)

    } catch (error) {
        errorRes(res, 400, false, error.message || "Something Went Wrong while Creating Student", null)
    }
}
const getAllStudents = async (req, res) => {
    try {
        const students = await Students.find()
        successRes(res, 400, true, "All Students are Fethced", students)
    } catch (error) {
        errorRes(res, 400, false, error.message || "Something Went Wrong while Fetching Data", null)
    }
}
const getStudentbyId = async (req, res) => {
    try {
        const { studentId } = req.params
        const studentData = await Students.findById(studentId)
        if (!studentData) {
            errorRes(res, 400, false, "Invalid Student ID", null)
        }
        successRes(res, 200, true, "Data Fetched with ID", studentData)
    } catch (error) {
        errorRes(res, 400, false, error.message || "Something Went Wrong while Fetching Data", null)

    }
}

const updateStudent = async (req, res) => {
    try {
        const { studentId } = req.params
        const { studentName, email, phoneNo } = req.body
        if (!studentName || !email || !phoneNo) {
            errorRes(res, 400, false, "Error while updaing your request".null)
        }
        const updatestudent = await Students.findByIdAndUpdate(studentId, {
            studentName,
            email,
            phoneNo
        }, { new: true })
        successRes(res, 200, false, "Student Details Updated", updatestudent)

    } catch (error) {
        errorRes(res, 400, false, error.message || "Something went Wrong", null)
    }
}
const deleteStudent = async (req, res) => {
    try {
        const { studentId } = req.params
        const response = await Students.findByIdAndDelete(studentId)
        successRes(res, 200, false, "Student Details deleted", null)

    } catch (error) {
        errorRes(res, 400, false, error.message || "Something went Wrong", null)

    }
}
export { registerStudent, getAllStudents, updateStudent, deleteStudent, getStudentbyId }
