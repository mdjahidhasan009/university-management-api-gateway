"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const FileUploadHelper_1 = require("../../../helpers/FileUploadHelper");
const user_validations_1 = require("./user.validations");
const router = express_1.default.Router();
router.post('/create-student', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), FileUploadHelper_1.FileUploadHelper.upload.single('file'), (req, res, next) => {
    req.body = user_validations_1.UserValidation.createStudent.parse(JSON.parse(req.body.data));
    return user_controller_1.UserController.createStudent(req, res, next);
});
router.post('/create-faculty', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), FileUploadHelper_1.FileUploadHelper.upload.single('file'), (req, res, next) => {
    req.body = user_validations_1.UserValidation.createFaculty.parse(JSON.parse(req.body.data));
    return user_controller_1.UserController.createFaculty(req, res, next);
});
router.post('/create-admin', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), FileUploadHelper_1.FileUploadHelper.upload.single('file'), (req, res, next) => {
    req.body = user_validations_1.UserValidation.createAdmin.parse(JSON.parse(req.body.data));
    return user_controller_1.UserController.createAdmin(req, res, next);
});
exports.userRoutes = router;
