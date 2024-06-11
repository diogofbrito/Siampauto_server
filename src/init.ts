import { routes } from './routes';
import express from 'express';

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
	res.setHeader('Access-Control-Allow-Methods', '*');
	res.setHeader('Access-Control-Allow-Headers', '*');
	next();
});

app.use(routes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
	console.log(`Server running at ${PORT}`);
});
