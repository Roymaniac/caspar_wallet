import express, { Express, Request, Response } from 'express';
const { logger } = require("./helpers/logger");
import { errorHandler } from "./middlewares/errorMiddleware"
import { router } from "./routes/auth.routes"
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT);


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler);

app.use("/api/auth", router)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
});