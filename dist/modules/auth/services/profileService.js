"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileService = void 0;
const user_1 = require("./../../../database/repositories/user");
const getAllCarsService_1 = require("../../cars/services/getAllCarsService");
function profileService(profileInputs) {
    return __awaiter(this, void 0, void 0, function* () {
        const userExists = yield user_1.userRepository.findById(profileInputs.id);
        if (!userExists) {
            throw new Error('User not exists');
        }
        const cars = yield (0, getAllCarsService_1.getAllCars)();
        const car = cars.find(car => car.ID === parseInt(userExists.validationCode));
        if (!car) {
            throw new Error('CarID not found');
        }
        return { user: userExists, car };
    });
}
exports.profileService = profileService;
