import { Request, Response } from 'express';
import { updateNoteService } from '../services/updateNoteService';


export async function updateNoteController(request: Request, response: Response) {
	try {
		const { id, title, date, content } = request.body;

		const updatedNote = await updateNoteService({
			id,
			title,
			date,
			content,
		});

		response.json(updatedNote);
	} catch (error) {
		console.error(error);
		response.status(500).json({ error: 'Error updating note' });
	}
}
