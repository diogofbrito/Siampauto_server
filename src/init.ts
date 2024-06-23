import { routes } from './routes';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
	console.log(`Server running at ${PORT}`);
});
