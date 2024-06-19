import { prisma } from '../prisma';

interface UpdateInput {
	dateBirth: Date;
	address: string;
	city: string;
	phoneNumber: string;
}

export const userRepository = {
	async create(fullName: string, email: string, password: string, nif: string, validationCode: string) {
		const user = {
			fullName,
			nif,
			email,
			password,
			validationCode,
		};

		const newUser = await prisma.user.create({ data: user });

		return newUser;
	},

	async updateProfile(id: number, data: UpdateInput) {
		return prisma.user.update({ where: { id }, data: { dateBirth: data.dateBirth, address: data.address, city: data.city, phoneNumber: data.phoneNumber } });
	},

	async findByEmail(email: string) {
		const user = await prisma.user.findUnique({ where: { email } });
		return user;
	},

	async findById(id: number) {
		const user = await prisma.user.findUnique({ where: { id } });
		return user;
	},

	async findByNif(nif: string) {
		const user = await prisma.user.findUnique({ where: { nif } });
		return user;
	},

	async deleteProfile(id: number) {
		return prisma.user.delete({ where: { id } });
	},
};
