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
exports.UserService = void 0;
const FileUploadHelper_1 = require("../../../helpers/FileUploadHelper");
const axios_1 = require("../../../shared/axios");
const createStudent = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    const uploadedImage = yield FileUploadHelper_1.FileUploadHelper.uploadToCloudinary(file);
    if (uploadedImage) {
        req.body.profileImage = uploadedImage.secure_url;
    }
    const { academicDepartment, academicFaculty, academicSemester } = req.body.student;
    const academicDepartmentResponse = yield axios_1.AuthService.get(`/academic-departments?syncId=${academicDepartment}`);
    if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
        req.body.student.academicDepartment = academicDepartmentResponse.data[0].id;
    }
    const academicFacultyResponse = yield axios_1.AuthService.get(`/academic-faculties?syncId=${academicFaculty}`);
    if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
        req.body.student.academicFaculty = academicFacultyResponse.data[0].id;
    }
    const academicSemesterResponse = yield axios_1.AuthService.get(`/academic-semesters?syncId=${academicSemester}`);
    if (academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)) {
        req.body.student.academicSemester = academicSemesterResponse.data[0].id;
    }
    const response = yield axios_1.AuthService.post('/users/create-student', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const createFaculty = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    const uploadedProfileImage = yield FileUploadHelper_1.FileUploadHelper.uploadToCloudinary(file);
    if (uploadedProfileImage) {
        req.body.faculty.profileImage = uploadedProfileImage.secure_url;
    }
    const { academicDepartment, academicFaculty } = req.body.faculty;
    const academicDepartmentResponse = yield axios_1.AuthService.get(`/academic-departments?syncId=${academicDepartment}`);
    if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
        req.body.faculty.academicDepartment = academicDepartmentResponse.data[0].id;
    }
    const academicFacultyResponse = yield axios_1.AuthService.get(`/academic-faculties?syncId=${academicFaculty}`);
    if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
        req.body.faculty.academicFaculty = academicFacultyResponse.data[0].id;
    }
    const response = yield axios_1.AuthService.post('/users/create-faculty', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const createAdmin = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    const uploadedProfileImage = yield FileUploadHelper_1.FileUploadHelper.uploadToCloudinary(file);
    if (uploadedProfileImage) {
        req.body.admin.profileImage = uploadedProfileImage.secure_url;
    }
    const response = yield axios_1.AuthService.post('/users/create-admin', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
exports.UserService = {
    createStudent,
    createFaculty,
    createAdmin
};
