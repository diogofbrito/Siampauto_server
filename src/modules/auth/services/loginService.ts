import { userRepository } from './../../../database/repositories/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface LogginInputs {
	email: string;
	password: string;
}
export async function loginService(logginInputs: LogginInputs) {
	const userExists = await userRepository.findByEmail(logginInputs.email);

	if (!userExists) {
		throw new Error('User not exists');
	}

	const passwordMatch = await bcrypt.compare(logginInputs.password, userExists.password);

	const token = jwt.sign({ userId: userExists.id }, 'meu token em jwt', { expiresIn: '1h' });

	return { user: userExists, token };
}
