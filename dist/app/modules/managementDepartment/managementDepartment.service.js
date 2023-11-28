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
exports.ManagementDepartmentService = void 0;
const axios_1 = require("../../../shared/axios");
const insertIntoDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.AuthService.post(`/management-departments/create-department`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const getAllFromDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.AuthService.get('/management-departments', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const getByIdFromDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const response = yield axios_1.AuthService.get(`/management-departments/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const updateOneInDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const response = yield axios_1.AuthService.patch(`/management-departments/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const deleteByIdFromDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const response = yield axios_1.AuthService.delete(`/management-departments/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
exports.ManagementDepartmentService = {
    getAllFromDB,
    getByIdFromDB,
    updateOneInDB,
    deleteByIdFromDB,
    insertIntoDB
};
