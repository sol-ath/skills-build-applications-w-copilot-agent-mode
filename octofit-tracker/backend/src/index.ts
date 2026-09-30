import express from 'express';

import './config/database.js';
import { createApiRouter } from './routes/api.js';

const app = express();
const port = Number(process.env.PORT ?? 8000);
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

app.use(express.json());
app.use('/api', createApiRouter(baseUrl));

app.listen(port, () => {
  console.log(`OctoFit Tracker API listening on port ${port}`);
});