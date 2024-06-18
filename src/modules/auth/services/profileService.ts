import { userRepository } from './../../../database/repositories/user';
import { getAllCars } from '../../cars/services/getAllCarsService';

interface ProfileInputs {
	id: number;
}
export async function profileService(profileInputs: ProfileInputs) {
	const userExists = await userRepository.findById(profileInputs.id);

	if (!userExists) {
		throw new Error('User not exists');
	}

	const cars = await getAllCars();

	const car = cars.find(car => car.ID === parseInt(userExists.validationCode));

	if (!car) {
		throw new Error('CarID not found');
	}

	return { user: userExists, car };
}
