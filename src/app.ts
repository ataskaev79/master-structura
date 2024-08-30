require('dotenv').config();
import { PORT } from './configs/env';
import express from 'express';
import http from 'http';

import DBConnection from './configs/db';
import { createMainRouter } from './routes';

// создаем объект приложения
const app = express();
app.enable('trust proxy');

// Body parser
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));

// DB init
DBConnection.authenticate()
  .then(() => console.log('Connection to the database has been established successfully'))
  .catch(err => console.error(`Unable to connect to the database: ${err}`));
DBConnection.sync();

const httpServer = http.createServer(app);

//Routes One Master REST API

app.use('/api', createMainRouter());

// начинаем прослушивать подключения на 2348 порту
httpServer.listen(PORT, () => console.log(`Worker ${process.pid} started and listening on port ${PORT}`));
