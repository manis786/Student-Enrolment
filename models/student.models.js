import mongoose from "mongoose"
const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNo: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const Students = mongoose.model("Students", studentSchema)
export default Students
