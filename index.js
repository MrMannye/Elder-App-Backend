import express from 'express';
import cors from 'cors';

import ExpedienteRouter from './components/expediente/router.js';
import PacientesRouter from './components/pacientes/router.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/expediente', ExpedienteRouter);
app.use('/pacientes', PacientesRouter);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(5000, () => {
	console.log('Server started on http://localhost:3000');
});