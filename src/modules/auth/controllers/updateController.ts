import { Request, Response } from 'express';
import { updateService } from '../services/updateService';
import { auth } from '../../../middlewares/auth';

export async function updateController(request: Request, response: Response) {
	try {
		const authReturn = await auth(request);
		const { dateBirth, address, city, phoneNumber } = request.body;
		const updateData = await updateService({ id: authReturn.id, dateBirth, address, city, phoneNumber });

		response.json(updateData);
	} catch (error) {
		console.error(error);
		response.status(500).json({ error: 'Error Updating' });
	}
}
