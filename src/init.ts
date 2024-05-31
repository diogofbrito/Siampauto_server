import { routes } from './routes';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(express.json());

app.use(routes);

app.use(
	cors({
		origin: '*',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowedHeaders: ['Content-Type', 'Authorization'],
	}),
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
