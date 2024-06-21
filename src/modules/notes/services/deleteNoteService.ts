import { notesRepository } from '../../../database/repositories/notes';

export async function deleteNoteService(id: number) {
	const deletedNote = await notesRepository.deleteNote(id);
	
	return deletedNote;
}
