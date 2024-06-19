import { userRepository } from '../../../database/repositories/user';

interface UpdateInputs {
    id: number;
	dateBirth: Date;
	address: string;
	city: string;
	phoneNumber: string;
}
export async function updateService(updateInputs: UpdateInputs) {
	const userExists = await userRepository.findById(updateInputs.id);

	if (!userExists) {
		throw new Error('User not exists');
    }

    return await userRepository.updateProfile(updateInputs.id, { dateBirth: updateInputs.dateBirth, address: updateInputs.address, city: updateInputs.city, phoneNumber: updateInputs.phoneNumber });

}
