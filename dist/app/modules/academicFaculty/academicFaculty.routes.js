"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicFacultyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const academicFaculty_controller_1 = require("./academicFaculty.controller");
const academicFaculty_validations_1 = require("./academicFaculty.validations");
const router = express_1.default.Router();
router.get('/', academicFaculty_controller_1.AcademicFacultyController.getAllFromDB);
router.get('/:id', academicFaculty_controller_1.AcademicFacultyController.getByIdFromDB);
router.post('/', (0, validateRequest_1.default)(academicFaculty_validations_1.AcademicFacultyValidation.create), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), academicFaculty_controller_1.AcademicFacultyController.insertIntoDB);
router.patch('/:id', (0, validateRequest_1.default)(academicFaculty_validations_1.AcademicFacultyValidation.update), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), academicFaculty_controller_1.AcademicFacultyController.updateOneInDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), academicFaculty_controller_1.AcademicFacultyController.deleteByIdFromDB);
exports.academicFacultyRoutes = router;
