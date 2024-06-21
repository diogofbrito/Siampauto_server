import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';

export interface Vehicle {
	ID: number;
	Brand: string;
	Model: string;
	Version: string;
	Year: number;
	Month: number;
	Category: string;
	Transmission: string;
	Fuel: string;
	Doors: number;
	Color: string;
	Seats: number;
	CC: number | string;
	HP: number ;
	Kms: number;
	EquipmentList: string[];
	Price: number;
	Obs: string;
	PhotoList: { Photo: string }[];
}

export async function getAllCars(): Promise<Vehicle[]> {
	try {
		const response = await axios.get('https://feeds.standvirtual.com/feeds-carspt/feed_user_business_58e670ffc340e30003830a6a01528767.xml', {
			responseType: 'text',
		});

		const xmlData = response.data;

		const parser = new XMLParser({
			ignoreAttributes: false,
			attributeNamePrefix: '',
		});
		const parsedXml = parser.parse(xmlData);

		const vehiclesArray = parsedXml.VehicleList?.Vehicle || [];

		if (!Array.isArray(vehiclesArray)) {
			throw new Error('Estrutura de dados de veículos inválida.');
		}

		const vehicles = vehiclesArray.map((vehicle: any) => ({
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
			CC: vehicle.CC ? parseInt(vehicle.CC, 10) : '-',
			HP: parseInt(vehicle.HP, 10),
			Kms: parseInt(vehicle.Kms, 10),
			Seats: parseInt(vehicle.Seats, 10),
			Obs: vehicle.Obs,
			EquipmentList: vehicle.EquipmentList ? vehicle.EquipmentList.split(', ') : [], 
			Price: parseFloat(vehicle.Price),
			PhotoList: Array.isArray(vehicle.PhotoList?.Photo) ? vehicle.PhotoList.Photo.map((photo: any) => ({ Photo: photo })) : [],
		}));

		return vehicles;
	} catch (error) {
		console.error('Erro ao buscar ou analisar veículos:', error);
		return [];
	}
}
