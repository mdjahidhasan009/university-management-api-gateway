import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { StudentSemesterPaymentValidation } from './studentSemesterPayment.validation';
import { StudentSemesterPaymentController } from './studentSemesterPayment.controller';

const router = express.Router();

router.get('/my-semester-payments', StudentSemesterPaymentController.getMyPayment);

// router.post(
//   '/initiate-payment',
//   validateRequest(StudentSemesterPaymentValidation.initiatePayment),
//   auth(ENUM_USER_ROLE.STUDENT),
//   StudentSemesterPaymentController.initiatePayment
// );
//
// router.post(
//   '/complete-payment',
//   validateRequest(StudentSemesterPaymentValidation.completePayment),
//   // auth(ENUM_USER_ROLE.STUDENT),
//   StudentSemesterPaymentController.completePayment
// );

export const studentSemesterPaymentRoutes = router;