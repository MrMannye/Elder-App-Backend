import express from 'express';
import { getPacientes } from './controller.js';

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const data = await getPacientes();
		res.status(200).json({ data: data });
	} catch (error) {
		res.status
	}
});

export default router;