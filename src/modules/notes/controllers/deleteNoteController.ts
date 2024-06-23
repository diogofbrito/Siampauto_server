import { Request, Response } from 'express';
import { deleteNoteService } from '../services/deleteNoteService';

export async function deleteNoteController(request: Request, response: Response) {
	try {
		const { id } = request.params;

		const deletedNote = await deleteNoteService(Number(id));

		response.json(deletedNote);
	} catch (error) {
		console.error(error);
		response.status(500).json({ error: 'Error deleting note' });
	}
}
