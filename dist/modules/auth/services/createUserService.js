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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = void 0;
const user_1 = require("./../../../database/repositories/user");
const getAllCarsService_1 = require("../../cars/services/getAllCarsService");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function createUserService(userInputs) {
    return __awaiter(this, void 0, void 0, function* () {
        const userExists = yield user_1.userRepository.findByEmail(userInputs.email);
        if (userExists) {
            throw new Error('User already exists');
        }
        const nifExists = yield user_1.userRepository.findByNif(userInputs.nif);
        if (nifExists) {
            throw new Error('Nif number already exists');
        }
        if (!userInputs.validationCode) {
            throw new Error('Validation code is required');
        }
        const cars = yield (0, getAllCarsService_1.getAllCars)();
        const carExist = cars.find(car => car.ID === parseInt(userInputs.validationCode));
        if (!carExist) {
            throw new Error('CarID not found');
        }
        const passwordHash = yield bcryptjs_1.default.hash(userInputs.password, 10);
        const user = yield user_1.userRepository.create(userInputs.fullName, userInputs.email, passwordHash, userInputs.nif, userInputs.validationCode);
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, 'meu token em jwt', { expiresIn: '1h' });
        return { user, token };
    });
}
exports.createUserService = createUserService;
