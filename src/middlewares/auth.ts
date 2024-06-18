import { Request } from 'express';
import jwt from 'jsonwebtoken';

export async function auth(request: Request): Promise<{ id: number }> {
	const { authorization } = request.headers;

	if (!authorization) {
		throw new Error('Invalid access token');
	}

	try {
		const [bearer, token] = authorization.split(' ');

		if (bearer !== 'Bearer') {
			throw new Error('Invalid access token');
		}

		const payload = (await jwt.verify(token, 'meu token em jwt')) as { userId: number };

		return {
			id: payload.userId as unknown as number,
		};
	} catch (error) {
		throw new Error('Invalid access token');
	}
}
