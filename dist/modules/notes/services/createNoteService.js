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
exports.createNoteService = void 0;
const notes_1 = require("../../../database/repositories/notes");
function createNoteService(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title, date, content, userId } = input;
        const newNote = yield notes_1.notesRepository.create(title, date, content, userId);
        return newNote;
    });
}
exports.createNoteService = createNoteService;
