"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferedCourseValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        semesterRegistrationId: zod_1.z.string({
            required_error: 'Semester registration id is required'
        }),
        courseIds: zod_1.z.array(zod_1.z.string({
            required_error: 'Course id is required'
        }), {
            required_error: 'Course ids are required'
        }),
        academicDepartmentId: zod_1.z.string({
            required_error: 'Academic department id is required'
        })
    })
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        semesterRegistrationId: zod_1.z.string().optional(),
        courseId: zod_1.z.string().optional(),
        academicDepartmentId: zod_1.z.string().optional()
    })
});
exports.OfferedCourseValidation = {
    create,
    update
};
