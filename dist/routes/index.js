"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const getAllCarsController_1 = require("../modules/cars/controllers/getAllCarsController");
const signUpController_1 = require("../modules/auth/controllers/signUpController");
const loginController_1 = require("../modules/auth/controllers/loginController");
const profileController_1 = require("../modules/auth/controllers/profileController");
const updateController_1 = require("../modules/auth/controllers/updateController");
const deleteController_1 = require("../modules/auth/controllers/deleteController");
const createNoteController_1 = require("../modules/notes/controllers/createNoteController");
const getNotesByUserIdController_1 = require("../modules/notes/controllers/getNotesByUserIdController");
const deleteNoteController_1 = require("../modules/notes/controllers/deleteNoteController");
const getNewsController_1 = require("../modules/news/controller/getNewsController");
const getWeatherController_1 = require("../modules/weather/controller/getWeatherController");
exports.routes = (0, express_1.Router)();
exports.routes.get('/cars', getAllCarsController_1.getAllCarsController);
exports.routes.post('/signup', signUpController_1.signUpController);
exports.routes.post('/login', loginController_1.logginController);
exports.routes.get('/profile', profileController_1.profileController);
exports.routes.patch('/update', updateController_1.updateController);
exports.routes.delete('/delete', deleteController_1.deleteController);
exports.routes.post('/notes', createNoteController_1.createNoteController);
exports.routes.get('/notes', getNotesByUserIdController_1.getNotesByUserIdController);
exports.routes.delete('/notes/:id', deleteNoteController_1.deleteNoteController);
exports.routes.get('/api/news/automobiles', getNewsController_1.getNewsController);
exports.routes.get('/api/weather', getWeatherController_1.getWeatherController);
