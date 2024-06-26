import { Request, Response } from 'express';
import { createUserService } from '../services/createUserService';

export async function signUpController(request: Request, response: Response) {
	try {
		const { fullName, email, password, nif, validationCode } = request.body;
		const signUpData = await createUserService({ fullName, email, password, nif, validationCode });
		response.json(signUpData);
	} catch (error) {
		console.error(error);
		response.status(500).json({ error: 'Error creating user' });
	}
}

