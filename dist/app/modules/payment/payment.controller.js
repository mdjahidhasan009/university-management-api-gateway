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
exports.PaymentController = void 0;
const response_1 = __importDefault(require("../../../shared/response"));
const payment_service_1 = require("./payment.service");
const webhook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield payment_service_1.PaymentServices.webhook(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const getAllFromDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield payment_service_1.PaymentServices.getAllFromDB(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const getByIdFromDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield payment_service_1.PaymentServices.getByIdFromDB(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const paymentSuccessResponse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield payment_service_1.PaymentServices.paymentSuccessResponse(req, res);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
exports.PaymentController = {
    webhook,
    getAllFromDB,
    getByIdFromDB,
    paymentSuccessResponse
};
