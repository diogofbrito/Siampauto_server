import { Router } from 'express';
import { getAllCarsController } from '../modules/cars/controllers/getAllCarsController';
import { signUpController } from '../modules/auth/controllers/signUpController';
import { logginController } from '../modules/auth/controllers/loginController';
import { profileController } from '../modules/auth/controllers/profileController';
import { updateController } from '../modules/auth/controllers/updateController';
import { deleteController } from '../modules/auth/controllers/deleteController';
import { createNoteController } from '../modules/notes/controllers/createNoteController';
import { getNotesByUserIdController } from '../modules/notes/controllers/getNotesByUserIdController';
import { deleteNoteController } from '../modules/notes/controllers/deleteNoteController';
import { getNewsController } from '../modules/news/controller/getNewsController';
import { getWeatherController } from '../modules/weather/controller/getWeatherController';

export const routes = Router();

routes.get('/cars', getAllCarsController);

routes.post('/signup', signUpController);
routes.post('/login', logginController);
routes.get('/profile', profileController);
routes.patch('/update', updateController);
routes.delete('/delete', deleteController);

routes.post('/notes', createNoteController);
routes.get('/notes', getNotesByUserIdController);
routes.delete('/notes/:id', deleteNoteController);

routes.get('/api/news/automobiles', getNewsController);

routes.get('/api/weather', getWeatherController);
