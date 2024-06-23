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
exports.updateService = void 0;
const user_1 = require("../../../database/repositories/user");
function updateService(updateInputs) {
    return __awaiter(this, void 0, void 0, function* () {
        const userExists = yield user_1.userRepository.findById(updateInputs.id);
        if (!userExists) {
            throw new Error('User not exists');
        }
        return yield user_1.userRepository.updateProfile(updateInputs.id, { dateBirth: updateInputs.dateBirth, address: updateInputs.address, city: updateInputs.city, phoneNumber: updateInputs.phoneNumber });
    });
}
exports.updateService = updateService;
