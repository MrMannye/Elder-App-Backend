import db from '../../db.js';

export const getPacientesDB = async () => {
	try {
		const [rows] = await db.query('SELECT * FROM pacientes');
		return rows
	} catch (error) {
		console.log(error);
	}
}