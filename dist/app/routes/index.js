"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const academicSemester_routes_1 = require("../modules/academicSemester/academicSemester.routes");
const academicDepartment_routes_1 = require("../modules/academicDepartment/academicDepartment.routes");
const building_routes_1 = require("../modules/building/building.routes");
const room_routes_1 = require("../modules/room/room.routes");
const course_routes_1 = require("../modules/course/course.routes");
const semesterRegistration_routes_1 = require("../modules/semesterRegistration/semesterRegistration.routes");
const offeredCourse_routes_1 = require("../modules/offeredCourse/offeredCourse.routes");
const academicFaculty_routes_1 = require("../modules/academicFaculty/academicFaculty.routes");
const offeredCourseSection_routes_1 = require("../modules/offeredCourseSection/offeredCourseSection.routes");
const offeredCourseClassSchedule_routes_1 = require("../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.routes");
const studentEnrolledCourse_routes_1 = require("../modules/studentEnrolledCourse/studentEnrolledCourse.routes");
const studentEnrolledCourseMark_routes_1 = require("../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.routes");
const studentSemesterPayment_routes_1 = require("../modules/studentSemesterPayment/studentSemesterPayment.routes");
const user_routes_1 = require("../modules/user/user.routes");
const auth_routes_1 = require("../modules/auth/auth.routes");
const faculty_routes_1 = require("../modules/faculty/faculty.routes");
const managementDepartment_routes_1 = require("../modules/managementDepartment/managementDepartment.routes");
const admin_routes_1 = require("../modules/admin/admin.routes");
const student_routes_1 = require("../modules/student/student.routes");
const payment_routes_1 = require("../modules/payment/payment.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        routes: auth_routes_1.authRoutes
    },
    {
        path: '/users',
        routes: user_routes_1.userRoutes
    },
    {
        path: '/faculties',
        routes: faculty_routes_1.facultyRoutes
    },
    {
        path: '/students',
        routes: student_routes_1.studentRoutes
    },
    {
        path: '/academic-faculties',
        routes: academicFaculty_routes_1.academicFacultyRoutes
    },
    {
        path: '/academic-departments',
        routes: academicDepartment_routes_1.academicDepartmentRoutes
    },
    {
        path: '/academic-semesters',
        routes: academicSemester_routes_1.academicSemesterRoutes
    },
    {
        path: '/buildings',
        routes: building_routes_1.buildingRoutes
    },
    {
        path: '/rooms',
        routes: room_routes_1.roomRoutes
    },
    {
        path: '/courses',
        routes: course_routes_1.courseRoutes
    },
    {
        path: '/semester-registrations',
        routes: semesterRegistration_routes_1.semesterRegistrationRoutes
    },
    {
        path: '/offered-courses',
        routes: offeredCourse_routes_1.offeredCourseRoutes
    },
    {
        path: '/offered-course-sections',
        routes: offeredCourseSection_routes_1.offeredCourseSectionRoutes
    },
    {
        path: '/offered-course-class-schedules',
        routes: offeredCourseClassSchedule_routes_1.offeredCourseClassScheduleRoutes
    },
    {
        path: '/student-enrolled-courses',
        routes: studentEnrolledCourse_routes_1.studentEnrolledCourseRoutes
    },
    {
        path: '/student-enrolled-course-marks',
        routes: studentEnrolledCourseMark_routes_1.studentEnrolledCourseMarkRoutes
    },
    {
        path: '/student-semester-payments',
        routes: studentSemesterPayment_routes_1.studentSemesterPaymentRoutes
    },
    {
        path: '/management-departments',
        routes: managementDepartment_routes_1.managementDepartmentRoutes
    },
    {
        path: '/admins',
        routes: admin_routes_1.adminRoutes
    },
    {
        path: '/payments',
        routes: payment_routes_1.paymentRoutes
    },
];
moduleRoutes.forEach((route) => {
    router.use(route.path, route.routes);
});
exports.default = router;
