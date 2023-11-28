"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentEnrolledCourseMarkValidation = void 0;
const zod_1 = require("zod");
const student_enrolled_course_marks_1 = require("../../../enums/student-enrolled-course-marks");
const updateStudentMarks = zod_1.z.object({
    body: zod_1.z.object({
        academicSemesterId: zod_1.z.string({
            required_error: 'Academic semester id is required'
        }),
        studentId: zod_1.z.string({
            required_error: 'Student id is required'
        }),
        courseId: zod_1.z.string({
            required_error: 'Course id is required'
        }),
        examType: zod_1.z.enum([...Object.values(student_enrolled_course_marks_1.ExamType)], {}),
        marks: zod_1.z
            .number({
            required_error: 'Marks is required'
        })
            .max(100)
            .min(0)
    })
});
const updateStudentCourseFinalMarks = zod_1.z.object({
    body: zod_1.z.object({
        academicSemesterId: zod_1.z.string({
            required_error: 'Academic semester id is required'
        }),
        studentId: zod_1.z.string({
            required_error: 'Student id is required'
        }),
        courseId: zod_1.z.string({
            required_error: 'Course id is required'
        })
    })
});
exports.StudentEnrolledCourseMarkValidation = {
    updateStudentMarks,
    updateStudentCourseFinalMarks
};
