import { getPacientesDB, getMedicionesPacienteDB, getPruebasPacienteDB } from './database.js';

export const getPacientes = async () => {
	try {
		const result = await getPacientesDB();
		return result
	} catch (error) {
		console.log(error);
	}
}

export const getMedicionesPaciente = async () => {
	try {
		const result = await getMedicionesPacienteDB();
		return result
	} catch (error) {
		console.log(error);
	}
}

export const getPruebasPaciente = async () => {
	try {
		const result = await getPruebasPacienteDB();
		return result
	} catch (error) {
		console.log(error);
	}
}