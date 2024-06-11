import { Request, Response } from 'express';
import { loginService } from '../services/loginService';

export async function logginController(request: Request, response: Response) {
	try {
		const { email, password } = request.body;
		const logginData = await loginService({ email, password });
		response.json(logginData);
	} catch (error) {
		console.error(error);
		response.status(500).json({ error: 'Error loggin' });
	}
}
