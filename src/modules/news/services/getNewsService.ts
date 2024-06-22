import axios from 'axios';

const baseUrl = 'https://api.nytimes.com/svc/topstories/v2';
const section = 'automobiles';
const apiKey = 'WPDqZGoDAp0TAFIfpcGwymmk24aKGYTi';

export async function getNewsServices() {
	try {
		const response = await axios.get(`${baseUrl}/${section}.json?api-key=${apiKey}`);
		const articles = response.data.results.slice(0, 6);
		return articles;
	} catch (error) {
		console.error('Erro ao buscar notícias de automóveis:', error);
		return [];
	}
}
