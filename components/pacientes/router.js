import express from 'express';
import { getPacientes, getMedicionesPaciente, getPruebasPaciente } from './controller.js';

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const data = await getPacientes();
		res.status(200).json({ data: data });
	} catch (error) {
		res.status
	}
});

router.get('/mediciones', async (req, res) => {
	try {
		const data = await getMedicionesPaciente();
		res.status(200).json({ data: data });
	} catch (error) {
		res.status
	}
});

router.get('/pruebas', async (req, res) => {
	try {
		const data = await getPruebasPaciente();
		res.status(200).json({ data: data });
	} catch (error) {
		res.status
	}
});

export default router;