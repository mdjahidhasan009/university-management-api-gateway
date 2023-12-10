import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { AuthService } from "../../../shared/axios";

const loginUser = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.post('/auth/login', req.body);
  return response;
};

const refreshToken = async (req: Request): Promise<IGenericResponse> => {
  const { refreshToken } = req.cookies;
  const response: IGenericResponse = await AuthService.post('/auth/refresh-token', req.body, {
    headers: {
      cookie: `refreshToken=${refreshToken}`
    }
  });
  return response;
};

const changePassword = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.post('/auth/change-password', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
}

const forgotPassword = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await AuthService.post('/auth/forgot-password', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
}

const resetPassword = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await AuthService.post('/auth/reset-password', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
}


export const AuthenticationService = {
  loginUser,
  refreshToken,
  changePassword,
  forgotPassword,
  resetPassword
};