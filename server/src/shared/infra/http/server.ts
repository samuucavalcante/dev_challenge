import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import AppError from 'shared/errors/AppError';
import Router from './routes';
import '@shared/infra/typeorm';
import '@shared/container';

const app = express();
app.use(cors());
app.use(express.json());
app.use(Router);

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.log(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  },
);

app.listen(3333, () => console.log('Server running on port 3333'));
