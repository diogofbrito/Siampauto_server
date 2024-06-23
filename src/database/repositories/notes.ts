import { prisma } from '../prisma';

interface UpdateInput {
    title: string;
    date: Date;
	content: string;
}

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


	async updateNote(id: number, data: UpdateInput) {
		return prisma.note.update({ where: { id }, data: { title: data.title, content: data.content, date: data.date } });
	},

	async findByUserId(id: number) {
		const user = await prisma.note.findMany({ where: { userId: id } });
		return user;
	},

	async deleteNote(id: number) {
		return prisma.note.delete({ where: { id } });
	},
};
