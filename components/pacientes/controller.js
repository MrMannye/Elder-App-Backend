import { getPacientesDB } from './database.js';

export const getPacientes = async () => {
	try {
		const result = await getPacientesDB();
		return result
	} catch (error) {
		console.log(error);
	}
}