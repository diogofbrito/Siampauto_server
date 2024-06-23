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
exports.getAllCars = void 0;
const axios_1 = __importDefault(require("axios"));
const fast_xml_parser_1 = require("fast-xml-parser");
function formatNumber(number) {
    return new Intl.NumberFormat('de-DE').format(number);
}
function getAllCars() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const response = yield axios_1.default.get('https://feeds.standvirtual.com/feeds-carspt/feed_user_business_58e670ffc340e30003830a6a01528767.xml', {
                responseType: 'text',
            });
            const xmlData = response.data;
            const parser = new fast_xml_parser_1.XMLParser({
                ignoreAttributes: false,
                attributeNamePrefix: '',
            });
            const parsedXml = parser.parse(xmlData);
            const vehiclesArray = ((_a = parsedXml.VehicleList) === null || _a === void 0 ? void 0 : _a.Vehicle) || [];
            if (!Array.isArray(vehiclesArray)) {
                throw new Error('Estrutura de dados de veículos inválida.');
            }
            const vehicles = vehiclesArray.map((vehicle) => {
                var _a;
                return ({
                    ID: parseInt(vehicle.ID, 10),
                    Brand: vehicle.Brand,
                    Model: vehicle.Model,
                    Version: vehicle.Version,
                    Year: parseInt(vehicle.Year, 10),
                    Month: parseInt(vehicle.Month, 10),
                    Category: vehicle.Category,
                    Transmission: vehicle.Transmission,
                    Fuel: vehicle.Fuel,
                    Doors: parseInt(vehicle.Doors, 10),
                    Color: vehicle.Color,
                    CC: vehicle.CC ? formatNumber(parseInt(vehicle.CC, 10)) : '-',
                    HP: formatNumber(parseInt(vehicle.HP, 10)),
                    Kms: formatNumber(parseInt(vehicle.Kms, 10)),
                    WarrantyMonths: parseInt(vehicle.WarrantyMonths, 10),
                    Seats: parseInt(vehicle.Seats, 10),
                    Obs: vehicle.Obs,
                    EquipmentList: vehicle.EquipmentList ? vehicle.EquipmentList.split(', ') : [],
                    Price: formatNumber(parseFloat(vehicle.Price)),
                    co2: parseInt(vehicle.co2, 10),
                    PhotoList: Array.isArray((_a = vehicle.PhotoList) === null || _a === void 0 ? void 0 : _a.Photo) ? vehicle.PhotoList.Photo.map((photo) => ({ Photo: photo })) : [],
                });
            });
            return vehicles;
        }
        catch (error) {
            console.error('Erro ao buscar ou analisar veículos:', error);
            return [];
        }
    });
}
exports.getAllCars = getAllCars;
