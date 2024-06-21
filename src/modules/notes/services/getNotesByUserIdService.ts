import { notesRepository } from '../../../database/repositories/notes';

export async function getNotesByUserIdService(userId: number) {
	const notes = await notesRepository.findByUserId(userId);

	return notes;
}
