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
exports.getNewsServices = void 0;
const axios_1 = __importDefault(require("axios"));
const baseUrl = 'https://api.nytimes.com/svc/topstories/v2';
const section = 'automobiles';
const apiKey = 'WPDqZGoDAp0TAFIfpcGwymmk24aKGYTi';
function getNewsServices() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${baseUrl}/${section}.json?api-key=${apiKey}`);
            const articles = response.data.results.slice(0, 6);
            return articles;
        }
        catch (error) {
            console.error('Erro ao buscar notícias de automóveis:', error);
            return [];
        }
    });
}
exports.getNewsServices = getNewsServices;
