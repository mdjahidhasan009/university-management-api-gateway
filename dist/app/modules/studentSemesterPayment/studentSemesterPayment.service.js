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
exports.StudentSemesterPaymentService = void 0;
const axios_1 = require("../../../shared/axios");
const getMyPayment = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.CoreService.get('/student-semester-payments/my-semester-payments', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
// const initiatePayment = async (req: Request): Promise<IGenericResponse> => {
//   const response: IGenericResponse = await CoreService.post(
//     '/student-semester-payments/initiate-payment',
//     {
//       params: req.body,
//       headers: {
//         Authorization: req.headers.authorization
//       }
//     }
//   );
//   return response;
// };
//
// const completePayment = async (req: Request): Promise<IGenericResponse> => {
//   const response: IGenericResponse = await CoreService.post(
//     '/student-semester-payments/complete-payment',
//     {
//       params: req.body,
//       headers: {
//         Authorization: req.headers.authorization
//       }
//     }
//   );
//   return response;
// };
const initiatePayment = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.CoreService.post(`/student-semester-payments/initiate-payment`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
const completePayment = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.CoreService.post(`/student-semester-payments/complete-payment`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
});
exports.StudentSemesterPaymentService = {
    getMyPayment,
    initiatePayment,
    completePayment
};
