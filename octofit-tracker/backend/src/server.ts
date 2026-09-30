import cors from 'cors';
import express from 'express';

import './config/database.js';
import { createApiRouter } from './routes/api.js';

const app = express();
const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const frontendOrigin = codespaceName
  ? `https://${codespaceName}-5173.app.github.dev`
  : 'http://localhost:5173';
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(cors({ origin: frontendOrigin }));
app.use(express.json());
app.use('/api', createApiRouter(baseUrl));

app.listen(port, () => {
  console.log(`OctoFit Tracker API listening on port ${port}`);
});