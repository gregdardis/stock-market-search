import express from 'express';


import apiRouter from './api';


const app = express();

app.use('/api', apiRouter);

export default app;