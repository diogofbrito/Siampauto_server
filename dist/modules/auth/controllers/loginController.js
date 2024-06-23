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
exports.logginController = void 0;
const loginService_1 = require("../services/loginService");
function logginController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = request.body;
            const logginData = yield (0, loginService_1.loginService)({ email, password });
            response.json(logginData);
        }
        catch (error) {
            console.error(error);
            response.status(500).json({ error: 'Error loggin' });
        }
    });
}
exports.logginController = logginController;
