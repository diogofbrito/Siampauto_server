import { Request, Response } from 'express';
import { getWeatherServices } from '../services/getWeatherService';

export async function getWeatherController(request: Request, response: Response) {
	try {
		const weather = await getWeatherServices();
		response.json(weather);
	} catch (error) {
		console.error(error);
		response.status(500).json({ error: 'Error listing weather app.' });
	}
}
