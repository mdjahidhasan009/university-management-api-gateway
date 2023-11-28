"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicSemesterRoutes = void 0;
const express_1 = __importDefault(require("express"));
const academicSemester_controller_1 = require("./academicSemester.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const academicSemester_validations_1 = require("./academicSemester.validations");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const router = express_1.default.Router();
router.get('/', academicSemester_controller_1.AcademicSemesterController.getAllFromDB);
router.get('/:id', academicSemester_controller_1.AcademicSemesterController.getByIdFromDB);
router.post('/', (0, validateRequest_1.default)(academicSemester_validations_1.AcademicSemesterValidation.create), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), academicSemester_controller_1.AcademicSemesterController.insertIntoDB);
router.patch('/:id', (0, validateRequest_1.default)(academicSemester_validations_1.AcademicSemesterValidation.update), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), academicSemester_controller_1.AcademicSemesterController.updateOneIntoDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), academicSemester_controller_1.AcademicSemesterController.deleteByIdFromDB);
exports.academicSemesterRoutes = router;
