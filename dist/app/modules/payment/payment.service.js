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
exports.PaymentServices = void 0;
const axios_1 = require("../../../shared/axios");
const webhook = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.PaymentService.post('/payment/webhook', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const getAllFromDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.PaymentService.get('/payment', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const getByIdFromDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const response = yield axios_1.PaymentService.get(`/payment/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const paymentSuccessResponse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('success payment');
    console.log(req.query);
    const response = yield axios_1.PaymentService.post('/payment/success', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    console.log('response');
    console.log(response);
    return response;
});
exports.PaymentServices = {
    webhook,
    getAllFromDB,
    getByIdFromDB,
    paymentSuccessResponse
};
