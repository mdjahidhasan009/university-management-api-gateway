import { Request, Response } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { PaymentService } from '../../../shared/axios';

const webhook = async (req: Request): Promise<IGenericResponse> => {
  const origin = req.headers.origin;
  const referer = req.headers.referer;
  const host = req.headers.host;

  console.log('Origin:', origin);
  console.log('Referer:', referer);
  console.log('Host:', host);

  const response: IGenericResponse = await PaymentService.post(
    '/payment/webhook',
    {
      params: req.query,
      // body: req.body,
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

const paymentSuccessResponse = async (req: Request, res: Response): Promise<IGenericResponse> => {
  console.log('success payment');
  console.log('req.query', req.query);
  console.log('req.body', req.body);
  const response: IGenericResponse = await PaymentService.post(
    '/payment/success',
    {
      params: req.query,
      body: req.body,
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  console.log('response');
  console.log(response);
  return response;
};


export const PaymentServices = {
  webhook,
  getAllFromDB,
  getByIdFromDB,
  paymentSuccessResponse
};