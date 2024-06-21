import { Request, Response } from 'express';
import { getNotesByUserIdService } from '../services/getNotesByUserIdService';
import { auth } from '../../../middlewares/auth';

export async function getNotesByUserIdController(request: Request, response: Response) {
	try {
		const authReturn = await auth(request);

		const notes = await getNotesByUserIdService(authReturn.id);
		response.json(notes);
	} catch (error) {
		console.error(error);
		response.status(500).json({ error: 'Error fetching notes' });
	}
}
