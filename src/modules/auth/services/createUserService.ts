import { userRepository } from './../../../database/repositories/user';
import { getAllCars } from '../../cars/services/getAllCarsService';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface IUserInputs {
	fullName: string;
	email: string;
	password: string;
	nif: string;
	validationCode: string;
}
export async function createUserService(userInputs: IUserInputs) {
	const userExists = await userRepository.findByEmail(userInputs.email);

	if (userExists) {
		throw new Error('User already exists');
	}

	const nifExists = await userRepository.findByNif(userInputs.nif);

	if (nifExists) {
		throw new Error('Nif number already exists');
	}

	if (!userInputs.validationCode) {
		throw new Error('Validation code is required');
	}

	const cars = await getAllCars();

	const carExist = cars.find(car => car.ID === parseInt(userInputs.validationCode));

	if(!carExist) {
		throw new Error('CarID not found');
	}

	const passwordHash = await bcrypt.hash(userInputs.password, 10);

	const user = await userRepository.create(userInputs.fullName, userInputs.email, passwordHash, userInputs.nif, userInputs.validationCode);

	const token = jwt.sign({ userId: user.id }, 'meu token em jwt', { expiresIn: '1h' });

	return { user, token };
}
