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
exports.FacultyController = void 0;
const faculty_service_1 = require("./faculty.service");
const response_1 = __importDefault(require("../../../shared/response"));
const getAllFromDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield faculty_service_1.FacultyService.getAllFromDB(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const getMyCourses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield faculty_service_1.FacultyService.getMyCourses(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const getMyCourseStudents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield faculty_service_1.FacultyService.getMyCourseStudents(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const getByIdFromDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield faculty_service_1.FacultyService.getByIdFromDB(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const getFacultyProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield faculty_service_1.FacultyService.getFacultyProfile(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const updateOneInDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield faculty_service_1.FacultyService.updateOneInDB(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const deleteByIdFromDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield faculty_service_1.FacultyService.deleteByIdFromDB(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
exports.FacultyController = {
    updateOneInDB,
    getAllFromDB,
    getByIdFromDB,
    getFacultyProfile,
    getMyCourseStudents,
    getMyCourses,
    deleteByIdFromDB
};
