"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.managementDepartmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const managementDepartment_validations_1 = require("./managementDepartment.validations");
const managementDepartment_controller_1 = require("./managementDepartment.controller");
const router = express_1.default.Router();
router.get('/', managementDepartment_controller_1.ManagementDepartmentController.getAllFromDB);
router.get('/:id', managementDepartment_controller_1.ManagementDepartmentController.getByIdFromDB);
router.post('/', (0, validateRequest_1.default)(managementDepartment_validations_1.ManagementDepartmentValidation.create), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), managementDepartment_controller_1.ManagementDepartmentController.insertIntoDB);
router.patch('/:id', (0, validateRequest_1.default)(managementDepartment_validations_1.ManagementDepartmentValidation.update), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), managementDepartment_controller_1.ManagementDepartmentController.updateOneInDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), managementDepartment_controller_1.ManagementDepartmentController.deleteByIdFromDB);
exports.managementDepartmentRoutes = router;
