import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import httpStatus from 'http-status';
import globalExceptionHandler from './app/middlewares/globalExceptionHandler';
import routes from './app/routes';
import config from "./config";

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.post('/api/v1/payments', cors(), (req, res) => {
  const status = req?.query?.status;

    if(status === 'success') {
      res.redirect(`${config.frontendUrl}/payments?status=success`);
    }
    // else if(status === 'error') {
    //   res.redirect(`${config.frontendUrl}/payments?status=error}`);
    // }
    else if(status === 'warning') {
      res.redirect(`${config.frontendUrl}/payments?status=warning`);
    } else {
      res.redirect(`${config.frontendUrl}/payments?status=error`);
    }
});

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || config.cors.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

//allow all origins
// app.use(cors({
//   origin: true,
//   credentials: true
// }));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cookieParser());

app.use('/api/v1', routes);

app.get('/', (req, res) => {
  res.send("Server running successfully");
});

app.use(globalExceptionHandler);

app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API not found',
    errorMessages: [
      {
        path: '',
        message: 'API not found'
      }
    ]
  });
});

export default app;
