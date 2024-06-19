import { userRepository } from '../../../database/repositories/user';

interface DeleteInputs {
    id: number;
}
export async function deleteService(deleteInputs: DeleteInputs) {
	const userExists = await userRepository.findById(deleteInputs.id);

	if (!userExists) {
		throw new Error('User not exists');
    }

    return await userRepository.deleteProfile(deleteInputs.id);

}
