import { notesRepository } from '../../../database/repositories/notes';

interface CreateNoteInput {
	title: string;
	content: string;
	userId: number;
	date: Date;
}

export async function createNoteService(input: CreateNoteInput) {
	const { title, date, content, userId } = input;

	const newNote = await notesRepository.create(title, date, content, userId);

	return newNote;
}
