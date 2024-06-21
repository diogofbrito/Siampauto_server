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

		console.log('Creating user:', user);

		const newUser = await prisma.user.create({ data: user });

		return newUser;
	},

	async findByEmail(email: string) {
		console.log('Searching for user by email:', email);

		const user = await prisma.user.findUnique({ where: { email } });
		console.log('User found by email:', user);

		return user;
	},

	async updateProfile(id: number, data: UpdateInput) {
		return prisma.user.update({ where: { id }, data: { dateBirth: data.dateBirth, address: data.address, city: data.city, phoneNumber: data.phoneNumber } });
	},

	async findById(id: number) {
		console.log('Searching for user by id:', id);

		const user = await prisma.user.findUnique({ where: { id } });
		console.log('User found by id:', user);

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
