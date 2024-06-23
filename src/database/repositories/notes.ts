import { prisma } from '../prisma';

export const notesRepository = {
	async create(title: string, date: Date, content: string, userId: number) {
		const note = {
            userId,
            title, 
            date,
            content
		};

		const newNote = await prisma.note.create({ data: note });

		return newNote;
	},


	async findByUserId(id: number) {
		const user = await prisma.note.findMany({ where: { userId: id } });
		return user;
	},

	async deleteNote(id: number) {
		return prisma.note.delete({ where: { id } });
	},
};
