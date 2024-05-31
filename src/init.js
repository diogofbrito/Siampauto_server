const express = require('express');
const app = express();
const routes = require('./routes/routes.js');

app.use(express.json());

app.use('/uploads', express.static('uploads'));

routes(app);


const cors = require('cors'); 

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
