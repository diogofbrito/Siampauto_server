import axios from 'axios';

const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const apiKey = 'c1544eda2f159ac5f87c22bbc7a4c6fc';

interface WeatherData {
	city: string;
	temperature: number;
	description: string;
	icon: string;
}
export async function getWeatherServices() {
	const cities = ['Lisbon', 'Faro', 'Porto'];
	const weatherData: WeatherData[] = [];

	try {
		await Promise.all(
			cities.map(async city => {
				const url = `${baseUrl}weather?q=${city},pt&units=metric&appid=${apiKey}`;
				const response = await axios.get(url);
				const { main, weather, name } = response.data;
				const { temp } = main;
				const { description, icon } = weather[0];
				weatherData.push({
					city: name,
					temperature: Math.round(temp),
					description,
					icon,
				});
			}),
		);

		return weatherData;
	} catch (error) {
		console.error('Erro ao obter dados meteorológicos:', error);
		return [];
	}
}
