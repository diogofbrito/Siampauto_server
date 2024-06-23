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
exports.getNewsController = void 0;
const getNewsService_1 = require("../services/getNewsService");
function getNewsController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const news = yield (0, getNewsService_1.getNewsServices)();
            response.json(news);
        }
        catch (error) {
            console.error(error);
            response.status(500).json({ error: 'Error listing news.' });
        }
    });
}
exports.getNewsController = getNewsController;
