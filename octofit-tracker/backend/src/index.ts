import express from 'express';

const app = express();

app.use(express.json());
app.get('/api', (_request, response) => {
  response.json({ name: 'OctoFit Tracker API', status: 'ok' });
});

const port = Number(process.env.PORT ?? 8000);

app.listen(port, () => {
  console.log(`OctoFit Tracker API listening on port ${port}`);
});