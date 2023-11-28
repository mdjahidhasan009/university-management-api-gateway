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
exports.SemesterRegistrationController = void 0;
const response_1 = __importDefault(require("../../../shared/response"));
const semesterRegistration_service_1 = require("./semesterRegistration.service");
const getAllFromDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationService.getAllFromDB(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const getByIdFromDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationService.getByIdFromDB(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const insertIntoDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationService.insertIntoDB(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const updateOneInDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationService.updateOneInDB(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const deleteByIdFromDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationService.deleteByIdFromDB(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const getMyRegistration = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationService.getMyRegistration(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const startRegistration = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationService.startRegistration(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const mySemesterRegistrationCourses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationService.mySemesterRegistrationCourses(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const enrollIntoCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationService.enrollIntoCourse(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const withDrawFromCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationService.withDrawFromCourse(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const confirmRegistration = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationService.confirmRegistration(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const startNewSemester = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationService.startNewSemester(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
exports.SemesterRegistrationController = {
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
