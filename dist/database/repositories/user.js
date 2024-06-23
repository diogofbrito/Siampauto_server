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
exports.userRepository = void 0;
const prisma_1 = require("../prisma");
exports.userRepository = {
    create(fullName, email, password, nif, validationCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = {
                fullName,
                nif,
                email,
                password,
                validationCode,
            };
            const newUser = yield prisma_1.prisma.user.create({ data: user });
            return newUser;
        });
    },
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.prisma.user.findUnique({ where: { email } });
            return user;
        });
    },
    updateProfile(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.prisma.user.update({ where: { id }, data: { dateBirth: data.dateBirth, address: data.address, city: data.city, phoneNumber: data.phoneNumber } });
        });
    },
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.prisma.user.findUnique({ where: { id } });
            return user;
        });
    },
    findByNif(nif) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.prisma.user.findUnique({ where: { nif } });
            return user;
        });
    },
    deleteProfile(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prisma.note.deleteMany({ where: { userId: id } });
            return prisma_1.prisma.user.delete({ where: { id } });
        });
    },
};
