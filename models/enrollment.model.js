import mongoose from "mongoose"
const enrollmentSchema = new mongoose.Schema({
    studentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: `Students`,
        required: true
    },
    courseID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: `Course`,
        required: true
    },
    enrollmentDate: {
        type: Date,
        required: true
    },
},{timestamps:true})
const Enrollment = mongoose.model("Enrollment",enrollmentSchema)
export default Enrollment