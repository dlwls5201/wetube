import express from 'express';  //const express = require('express');
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import globalRouter from './routes/globalRouter';
import userRouter from './routes/userRouter';
import videoRouter from './routes/videoRouter';

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("dev"));

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

export default app;