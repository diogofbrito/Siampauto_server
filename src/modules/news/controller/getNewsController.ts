import { Request, Response } from 'express';
import { getNewsServices } from '../services/getNewsService';

export async function getNewsController(request: Request, response: Response) {
	try {
		const news = await getNewsServices();
		response.json(news);
	} catch (error) {
		console.error(error);
		response.status(500).json({ error: 'Error listing news.' });
	}
}
