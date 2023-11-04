import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { PaymentService } from '../../../shared/axios';

const webhook = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await PaymentService.post(
    '/payment/webhook',
    {
      params: req.query,
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};
const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await PaymentService.get(
    '/payment',
    {
      params: req.query,
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};
const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await PaymentService.get(
    `/payment/${id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};



export const PaymentServices = {
  webhook,
  getAllFromDB,
  getByIdFromDB
};