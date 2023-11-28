"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = exports.CoreService = exports.AuthService = exports.HttpService = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config"));
const HttpService = (baseUrl) => {
    const instance = axios_1.default.create({
        baseURL: baseUrl,
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    instance.interceptors.request.use((config) => {
        return config;
    }, (error) => {
        return error;
    });
    instance.interceptors.response.use((response) => {
        return response.data;
    }, (error) => {
        return Promise.reject(error);
    });
    return instance;
};
exports.HttpService = HttpService;
const AuthService = HttpService(config_1.default.authServiceUrl);
exports.AuthService = AuthService;
const CoreService = HttpService(config_1.default.coreServiceUrl);
exports.CoreService = CoreService;
const PaymentService = HttpService(config_1.default.paymentServiceUrl);
exports.PaymentService = PaymentService;
