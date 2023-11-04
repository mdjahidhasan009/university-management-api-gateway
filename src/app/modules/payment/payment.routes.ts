import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { PaymentController } from './payment.controller';

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN), PaymentController.getAllFromDB);
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN), PaymentController.getByIdFromDB);

router.post(
  '/webhook',
  PaymentController.webhook
);


export const paymentRoutes = router;