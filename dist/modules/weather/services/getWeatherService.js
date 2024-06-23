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
exports.getWeatherServices = void 0;
const axios_1 = __importDefault(require("axios"));
const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const apiKey = 'c1544eda2f159ac5f87c22bbc7a4c6fc';
function getWeatherServices() {
    return __awaiter(this, void 0, void 0, function* () {
        const cities = ['Lisbon', 'Faro', 'Porto'];
        const weatherData = [];
        try {
            yield Promise.all(cities.map((city) => __awaiter(this, void 0, void 0, function* () {
                const url = `${baseUrl}weather?q=${city},pt&units=metric&appid=${apiKey}`;
                const response = yield axios_1.default.get(url);
                const { main, weather, name } = response.data;
                const { temp } = main;
                const { description, icon } = weather[0];
                weatherData.push({
                    city: name,
                    temperature: Math.round(temp),
                    description,
                    icon,
                });
            })));
            return weatherData;
        }
        catch (error) {
            console.error('Erro ao obter dados meteorológicos:', error);
            return [];
        }
    });
}
exports.getWeatherServices = getWeatherServices;
