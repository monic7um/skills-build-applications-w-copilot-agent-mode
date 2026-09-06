import express from 'express';
import { getApiBaseUrl } from './config/api.js';
import './config/database.js';
import apiRouter from './routes/api.js';

const app = express();
const port = Number(process.env.PORT || 8000);

app.use(express.json());
app.use('/api', apiRouter);

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' });
});

app.get('/api/config', (_request, response) => {
  response.json({ apiBaseUrl: getApiBaseUrl() });
});

app.listen(port, () => {
  console.log(`OctoFit backend listening on port ${port}`);
});