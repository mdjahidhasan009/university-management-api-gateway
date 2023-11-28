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
exports.StudentEnrolledCourseMarkController = void 0;
const response_1 = __importDefault(require("../../../shared/response"));
const studentEnrolledCourseMark_service_1 = require("./studentEnrolledCourseMark.service");
const getAllFromDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield studentEnrolledCourseMark_service_1.StudentEnrolledCourseMarkService.getAllFromDB(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const getStudentMarks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield studentEnrolledCourseMark_service_1.StudentEnrolledCourseMarkService.getStudentMarks(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const updateMarks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield studentEnrolledCourseMark_service_1.StudentEnrolledCourseMarkService.updateMarks(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const updateCourseFinalMarks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield studentEnrolledCourseMark_service_1.StudentEnrolledCourseMarkService.updateCourseFinalMarks(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
exports.StudentEnrolledCourseMarkController = {
    getAllFromDB,
    updateMarks,
    updateCourseFinalMarks,
    getStudentMarks
};
