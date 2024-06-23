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
exports.loginService = void 0;
const user_1 = require("./../../../database/repositories/user");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function loginService(logginInputs) {
    return __awaiter(this, void 0, void 0, function* () {
        const userExists = yield user_1.userRepository.findByEmail(logginInputs.email);
        if (!userExists) {
            throw new Error('User not exists');
        }
        const passwordMatch = yield bcryptjs_1.default.compare(logginInputs.password, userExists.password);
        if (!passwordMatch) {
            throw new Error('Password not exists');
        }
        const token = jsonwebtoken_1.default.sign({ userId: userExists.id }, 'meu token em jwt', { expiresIn: '1h' });
        return { user: userExists, token };
    });
}
exports.loginService = loginService;
