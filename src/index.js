import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import dotenv from 'dotenv';
import Router from './routers/index.js';
import errorHandler from './middlewares/errorHandlerMiddleware.js';

dotenv.config();
const app = express().use(json()).use(cors());
app.use(Router);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
