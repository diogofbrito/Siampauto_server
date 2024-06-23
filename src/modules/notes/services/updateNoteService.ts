import { notesRepository } from '../../../database/repositories/notes';

interface UpdateNoteInput {
	id: number;
	title: string;
	date: Date;
	content: string;
}

export async function updateNoteService(input: UpdateNoteInput) {
	const { id, title, date, content } = input;

	const updatedNote = await notesRepository.updateNote(id, { title, date, content });

	return updatedNote;
}
