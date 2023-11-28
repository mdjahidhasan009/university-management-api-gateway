"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemesterRegistrationService = void 0;
const axios_1 = require("../../../shared/axios");
const getAllFromDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.CoreService.get('/semester-registrations', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const getByIdFromDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const response = yield axios_1.CoreService.get(`/semester-registrations/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const insertIntoDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.CoreService.post(`/semester-registrations`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const updateOneInDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const response = yield axios_1.CoreService.patch(`/semester-registrations/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const deleteByIdFromDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const response = yield axios_1.CoreService.delete(`/semester-registrations/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const getMyRegistration = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.CoreService.get(`/semester-registrations/my-registration`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const startRegistration = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.CoreService.post(`/semester-registrations/start-registration`, {}, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const mySemesterRegistrationCourses = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.CoreService.get(`/semester-registrations/my-semester-registration-courses`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const enrollIntoCourse = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.CoreService.post(`/semester-registrations/enroll-into-course`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const withDrawFromCourse = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.CoreService.post(`/semester-registrations/withdraw-from-course`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const confirmRegistration = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.CoreService.post(`/semester-registrations/confirm-registration`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const startNewSemester = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const response = yield axios_1.CoreService.post(`/semester-registrations/${id}/start-new-semester`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
exports.SemesterRegistrationService = {
    getAllFromDB,
    getByIdFromDB,
    updateOneInDB,
    deleteByIdFromDB,
    insertIntoDB,
    getMyRegistration,
    startRegistration,
    mySemesterRegistrationCourses,
    enrollIntoCourse,
    withDrawFromCourse,
    confirmRegistration,
    startNewSemester
};
