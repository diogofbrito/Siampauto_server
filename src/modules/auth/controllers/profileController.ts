import { Request, Response } from 'express';
import { profileService } from '../services/profileService';
import { auth } from '../../../middlewares/auth';

export async function profileController(request: Request, response: Response) {
	try {
        const authReturn = await auth(request);
		const profileData = await profileService({ id: authReturn.id });
        response.json(profileData);
        
	} catch (error) {
		console.error(error);
		response.status(500).json({ error: 'Error profile' });
    }
    
}
