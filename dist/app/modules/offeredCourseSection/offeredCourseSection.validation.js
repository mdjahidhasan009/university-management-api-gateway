"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferedCourseSectionValidation = void 0;
const zod_1 = require("zod");
const global_1 = require("../../../constants/global");
const timeStringSchema = zod_1.z.string().refine((time) => {
    const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return regex.test(time);
}, {
    message: "Invalid time format, expected 'HH:MM' in 24-hour format"
});
const create = zod_1.z.object({
    body: zod_1.z.object({
        offeredCourseId: zod_1.z.string({
            required_error: 'Offered course id is required'
        }),
        maxCapacity: zod_1.z.number({
            required_error: 'Max capacity is required'
        }),
        title: zod_1.z.string({
            required_error: 'Title is required'
        }),
        classSchedules: zod_1.z.array(zod_1.z
            .object({
            dayOfWeek: zod_1.z.enum([...global_1.daysInWeek], {
                required_error: 'Day of week is required'
            }),
            startTime: timeStringSchema,
            endTime: timeStringSchema,
            roomId: zod_1.z.string({
                required_error: 'Room id is required'
            }),
            facultyId: zod_1.z.string({
                required_error: 'Faculty id is required'
            })
        })
            .refine(({ startTime, endTime }) => {
            const start = new Date(`1970-01-01T${startTime}:00`);
            const end = new Date(`1970-01-01T${endTime}:00`);
            return start < end;
        }, {
            message: 'Start time must be before end time'
        }), {
            required_error: 'Class schedules are required'
        })
    })
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        maxCapacity: zod_1.z.number().optional(),
        title: zod_1.z.string().optional()
    })
});
exports.OfferedCourseSectionValidation = {
    create,
    update
};
