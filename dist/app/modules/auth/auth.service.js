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
exports.AuthenticationService = void 0;
const axios_1 = require("../../../shared/axios");
const loginUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.AuthService.post('/auth/login', req.body);
    return response;
});
const refreshToken = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { refreshToken } = req.cookies;
    const response = yield axios_1.AuthService.post('/auth/refresh-token', req.body, {
        headers: {
            cookie: `refreshToken=${refreshToken}`
        }
    });
    return response;
});
const changePassword = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.AuthService.post('/auth/change-password', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
exports.AuthenticationService = {
    loginUser,
    refreshToken,
    changePassword
};
