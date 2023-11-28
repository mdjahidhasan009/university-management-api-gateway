"use strict";
// import { z } from 'zod';
// import { PaymentTypes } from '../../../enums/student-semester-payment';
//
// const initiatePayment = z.object({
//   body: z.object({
//     academicSemesterId: z.string({
//       required_error: 'Academic semester id is required'
//     }),
//     paymentType: z.enum([...Object.values(PaymentTypes)] as [string, ...string[]], {})
//   })
// });
//
// const completePayment = z.object({
//   body: z.object({
//     transactionId: z.string({
//       required_error: 'Transaction id is required'
//     })
//   })
// });
//
// export const StudentSemesterPaymentValidation = {
//   initiatePayment,
//   completePayment
// };
