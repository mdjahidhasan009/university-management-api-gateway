"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemesterRegistrationValidation = void 0;
const zod_1 = require("zod");
const semester_registration_1 = require("../../../enums/semester-registration");
const create = zod_1.z.object({
    body: zod_1.z.object({
        startDate: zod_1.z.string({
            required_error: 'Start date is required'
        }),
        endDate: zod_1.z.string({
            required_error: 'End date is required'
        }),
        academicSemesterId: zod_1.z.string({
            required_error: 'Academic semester id is required'
        }),
        minCredit: zod_1.z.number({
            required_error: 'Min credit is required'
        }),
        maxCredit: zod_1.z.number({
            required_error: 'Max credit is required'
        })
    })
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        startDate: zod_1.z.string().optional(),
        endDate: zod_1.z.string().optional(),
        academicSemesterId: zod_1.z.string().optional(),
        status: zod_1.z
            .enum([...Object.values(semester_registration_1.SemesterRegistrationStatus)], {})
            .optional(),
        minCredit: zod_1.z.number().optional(),
        maxCredit: zod_1.z.number().optional()
    })
});
const enrollIntoCourse = zod_1.z.object({
    body: zod_1.z.object({
        offeredCourseId: zod_1.z.string({
            required_error: 'Student id is required'
        }),
        offeredCourseSectionId: zod_1.z.string({
            required_error: 'Student id is required'
        })
    })
});
const withdrawFromCourse = zod_1.z.object({
    body: zod_1.z.object({
        semesterRegistrationId: zod_1.z.string().optional(),
        studentId: zod_1.z.string().optional(),
        offeredCourseId: zod_1.z.string().optional(),
        offeredCourseSectionId: zod_1.z.string().optional()
    })
});
exports.SemesterRegistrationValidation = {
    create,
    update,
    enrollIntoCourse,
    withdrawFromCourse
};
