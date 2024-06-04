import { Request, Response } from 'express';
import { getAllCars } from '../services/getAllCarsService';

export async function getAllCarsController(request: Request, response: Response) {
	try {
		const cars = await getAllCars();
		response.json(cars);
	} catch (error) {
		console.error(error);
		response.status(500).json({ error: 'Erro ao listar carros' });
	}
}


