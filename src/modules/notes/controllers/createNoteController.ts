import { Request, Response } from 'express';
import { createNoteService } from '../services/createNoteService';
import { auth } from '../../../middlewares/auth';

export async function createNoteController(request: Request, response: Response) {
	try {
		const authReturn = await auth(request);
		const { title, date, content } = request.body;

		const newNote = await createNoteService({
			title,
			content,
			date,
			userId: authReturn.id,
		});

		response.status(201).json(newNote);
	} catch (error) {
		console.error(error);
		response.status(500).json({ error: 'Error creating note' });
	}
}
