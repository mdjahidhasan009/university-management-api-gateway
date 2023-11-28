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
exports.RoomService = void 0;
const axios_1 = require("../../../shared/axios");
const getAllFromDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.CoreService.get('/rooms', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const getByIdFromDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const response = yield axios_1.CoreService.get(`/rooms/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const insertIntoDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.CoreService.post(`/rooms`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const updateOneInDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const response = yield axios_1.CoreService.patch(`/rooms/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const deleteByIdFromDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const response = yield axios_1.CoreService.delete(`/rooms/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
exports.RoomService = {
    getAllFromDB,
    getByIdFromDB,
    updateOneInDB,
    deleteByIdFromDB,
    insertIntoDB
};
