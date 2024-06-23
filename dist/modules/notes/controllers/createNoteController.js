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
exports.createNoteController = void 0;
const createNoteService_1 = require("../services/createNoteService");
const auth_1 = require("../../../middlewares/auth");
function createNoteController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const authReturn = yield (0, auth_1.auth)(request);
            const { title, date, content } = request.body;
            const newNote = yield (0, createNoteService_1.createNoteService)({
                title,
                content,
                date,
                userId: authReturn.id,
            });
            response.status(201).json(newNote);
        }
        catch (error) {
            console.error(error);
            response.status(500).json({ error: 'Error creating note' });
        }
    });
}
exports.createNoteController = createNoteController;
