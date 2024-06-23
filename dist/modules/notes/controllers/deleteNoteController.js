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
exports.deleteNoteController = void 0;
const deleteNoteService_1 = require("../services/deleteNoteService");
function deleteNoteController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            const deletedNote = yield (0, deleteNoteService_1.deleteNoteService)(Number(id));
            response.json(deletedNote);
        }
        catch (error) {
            console.error(error);
            response.status(500).json({ error: 'Error deleting note' });
        }
    });
}
exports.deleteNoteController = deleteNoteController;
