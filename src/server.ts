import 'dotenv/config';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { router } from './routes';
import { ApiError } from './validations/exceptions/ApiError';
import { BaseApi } from './dtos/BaseApi';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use((err: ApiError | any, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    if (err.message) {
      response.status(err.code).json({
        message: err.message,
        data: null,
        status: false,
      } satisfies BaseApi<null>);
      return;
    }
    response.status(err.code).end();
    return;
  }

  response.status(500).json({
    message: err.message || 'Internal Server Error',
    data: null,
    status: false,
  } as BaseApi<null>);
  return;
});

app.listen(PORT, () => console.log(`🔥🚀 Server is running on PORT ${PORT}`));
