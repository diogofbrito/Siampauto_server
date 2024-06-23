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
exports.deleteController = void 0;
const auth_1 = require("../../../middlewares/auth");
const deleteService_1 = require("../services/deleteService");
function deleteController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const authReturn = yield (0, auth_1.auth)(request);
            const deleteData = yield (0, deleteService_1.deleteService)({ id: authReturn.id });
            response.json(deleteData);
        }
        catch (error) {
            console.error(error);
            response.status(500).json({ error: 'Error Deleting' });
        }
    });
}
exports.deleteController = deleteController;
