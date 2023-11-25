import express, { type Express, type Request, type Response } from 'express';
import { logger } from './helpers/logger';
import './db/db.config';
import { errorHandler } from './middlewares/errorMiddleware';
import authRouter from './routes/auth.routes';
import dotenv from 'dotenv';
import mailRouter from './routes/mail.routes';

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

app.use('/api/auth', authRouter);
app.use('/activate', mailRouter);

app.get('/', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
});
