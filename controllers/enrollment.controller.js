import Enrollment from "../models/enrollment.model.js";

const enrollStudent = async (req, res) => {
    try {
        const { studentID, courseID } = req.body;

        if (!studentID || !courseID) {
            return res.status(400).json({ 
                status: false, 
                message: "studentID and courseID are required", 
                data: null 
            });
        }

        const existingEnrollment = await Enrollment.findOne({ studentID, courseID });
        if (existingEnrollment) {
            return res.status(400).json({ 
                status: false, 
                message: "Student is already enrolled in this course", 
                data: null 
            });
        }

        const newEnrollment = await Enrollment.create({ 
            studentID, 
            courseID, 
            enrollmentDate: new Date() 
        });

        return res.status(201).json({ 
            status: true, 
            message: "Student Enrolled Successfully!", 
            data: newEnrollment 
        });

    } catch (error) {
        return res.status(400).json({ 
            status: false, 
            message: error.message || "Enrollment failed", 
            data: null 
        });
    }
};

const getStudentsByCourse = async (req, res) => {
    try {
        const { courseId } = req.params; 

        const enrollments = await Enrollment.find({ courseID: courseId }).populate('studentID');

        const studentsList = enrollments.map(enroll => enroll.studentID).filter(student => student !== null);

        return res.status(200).json({ 
            status: true, 
            message: "Fetched all students for this course", 
            data: studentsList 
        });

    } catch (error) {
        return res.status(400).json({ 
            status: false, 
            message: error.message || "Something went wrong", 
            data: null 
        });
    }
};

export { enrollStudent, getStudentsByCourse };