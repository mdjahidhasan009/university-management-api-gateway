import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const getMyPayment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(
    '/student-semester-payments/my-semester-payments',
    {
      params: req.query,
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const initiatePayment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    '/student-semester-payments/initiate-payment',
    {
      params: req.body,
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const completePayment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    '/student-semester-payments/complete-payment',
    {
      params: req.body,
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

// const initiatePayment = async (req: Request): Promise<IGenericResponse> => {
//   const response: IGenericResponse = await CoreService.post(
//     `/student-semester-payment/initiate-payment`,
//     req.body,
//     {
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
//     `/student-semester-payment/complete-payment`,
//     req.body,
//     {
//       headers: {
//         Authorization: req.headers.authorization
//       }
//     }
//   );
//   return response;
// };

export const StudentSemesterPaymentService = {
  getMyPayment,
  initiatePayment,
  completePayment
};