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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const response_1 = __importDefault(require("../../../shared/response"));
const student_service_1 = require("./student.service");
const getAllFromDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.StudentService.getAllFromDB(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const getMyCourses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.StudentService.getMyCourses(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const getMyAcademicInfos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.StudentService.getMyAcademicInfos(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const getMyCourseSchedules = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.StudentService.getMyCourseSchedules(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const getByIdFromDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.StudentService.getByIdFromDB(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const getStudentProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.StudentService.getStudentProfile(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const updateOneInDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.StudentService.updateOneInDB(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const deleteByIdFromDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.StudentService.deleteByIdFromDB(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
exports.StudentController = {
    getAllFromDB,
    getByIdFromDB,
    updateOneInDB,
    deleteByIdFromDB,
    getMyCourses,
    getMyCourseSchedules,
    getMyAcademicInfos,
    getStudentProfile
};
