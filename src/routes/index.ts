import { Router } from 'express';
import { getAllCarsController } from '../modules/cars/controllers/getAllCarsController';
import { signUpController } from '../modules/auth/controllers/signUpController';
import { logginController } from '../modules/auth/controllers/loginController';

export const routes = Router();

routes.get('/cars', getAllCarsController);
routes.post('/signup', signUpController);
routes.post('/login', logginController);
