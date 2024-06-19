import { Router } from 'express';
import { getAllCarsController } from '../modules/cars/controllers/getAllCarsController';
import { signUpController } from '../modules/auth/controllers/signUpController';
import { logginController } from '../modules/auth/controllers/loginController';
import { profileController } from '../modules/auth/controllers/profileController';
import { updateController } from '../modules/auth/controllers/updateController';
import { deleteController } from '../modules/auth/controllers/deleteController';

export const routes = Router();

routes.get('/cars', getAllCarsController);
routes.post('/signup', signUpController);
routes.post('/login', logginController);
routes.get('/profile', profileController);
routes.patch('/update', updateController);
routes.delete('/delete', deleteController);
