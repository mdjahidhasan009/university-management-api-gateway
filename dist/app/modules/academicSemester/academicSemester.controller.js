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
exports.AcademicSemesterController = void 0;
const academicSemester_service_1 = require("./academicSemester.service");
const response_1 = __importDefault(require("../../../shared/response"));
const insertIntoDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield academicSemester_service_1.AcademicSemesterService.insertIntoDB(req);
        (0, response_1.default)(res, result);
    }
    catch (err) {
        next(err);
    }
});
const getAllFromDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield academicSemester_service_1.AcademicSemesterService.getAllFromDB(req);
        (0, response_1.default)(res, result);
    }
    catch (err) {
        next(err);
    }
});
const updateOneIntoDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield academicSemester_service_1.AcademicSemesterService.updateOneIntoDB(req);
        (0, response_1.default)(res, result);
    }
    catch (err) {
        next(err);
    }
});
const getByIdFromDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield academicSemester_service_1.AcademicSemesterService.getByIdFromDB(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const deleteByIdFromDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield academicSemester_service_1.AcademicSemesterService.deleteByIdFromDB(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
exports.AcademicSemesterController = {
    insertIntoDB,
    getAllFromDB,
    updateOneIntoDB,
    getByIdFromDB,
    deleteByIdFromDB
};
