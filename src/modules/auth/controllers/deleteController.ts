import { Request, Response } from 'express';
import { auth } from '../../../middlewares/auth';
import { deleteService } from '../services/deleteService';

export async function deleteController(request: Request, response: Response) {
	try {
        const authReturn = await auth(request);
		const deleteData = await deleteService( {id: authReturn.id} );
		response.json(deleteData);
	} catch (error) {
		console.error(error);
		response.status(500).json({ error: 'Error Deleting' });
	}
}
