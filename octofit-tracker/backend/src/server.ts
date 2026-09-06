import express from 'express';
import './config/database.js';
import apiRouter from './routes/api.js';

const server = express();
const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

server.use(express.json());
server.use('/api', apiRouter);

server.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' });
});

server.get('/api/config', (_request, response) => {
  response.json({ apiBaseUrl });
});

export default server;