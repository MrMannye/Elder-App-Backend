import db from '../../db.js';

export const getPacientesDB = async () => {
	try {
		const [rows] = await db.query('SELECT * FROM pacientes');
		return rows
	} catch (error) {
		console.log(error);
	}
}

export const getMedicionesPacienteDB = async () => {
	try {
		const [rows] = await db.query('SELECT * FROM paciente_medantropometricas');
		return rows
	} catch (error) {
		console.log(error);
	}
}

export const getPruebasPacienteDB = async () => {
	try {
		const [rows] = await db.query('SELECT * FROM paciente_pruebas');
		return rows
	} catch (error) {
		console.log(error);
	}
}