/* const homeController = require('../controllers/homeController');
const clientesController = require('../controllers/clientesController');
const marcasController = require('../controllers/marcasController');
const carrosController = require('../controllers/carrosController');
const pedidosController = require('../controllers/pedidosController');
const loginController = require('../controllers/loginController');


module.exports = app => {
	app.get('/', homeController.index);

	app.post('/clientes', clientesController.criarCliente);
	app.get('/clientes', clientesController.listarClientes);
	app.get('/clientes/:id', clientesController.obterCliente);
	app.put('/clientes/:id', clientesController.atualizarCliente);
	app.delete('/clientes/:id', clientesController.excluirCliente);

	app.post('/marcas', marcasController.criarMarca);
	app.get('/marcas', marcasController.listarMarcas);
	app.get('/marcas/:id', marcasController.obterMarca);
	app.put('/marcas/:id', marcasController.atualizarMarca);
	app.delete('/marcas/:id', marcasController.excluirMarca);

	app.post('/carros', carrosController.criarCarro);
	app.get('/carros', carrosController.listarCarros);
	app.get('/carros/:id', carrosController.obterCarro);
	app.put('/carros/:id', carrosController.atualizarCarro);
	app.delete('/carros/:id', carrosController.excluirCarro);


	app.post('/pedidos', pedidosController.criarPedido);
	app.get('/pedidos', pedidosController.listarPedidos);
    app.get('/clientes/:cliente_id/pedidos', pedidosController.listarPedidosPorCliente); 
    
    app.post('/login', loginController.login);

}; */

import { Router } from 'express';
import { getAllCarsController } from '../modules/cars/controllers/getAllCarsController';

export const routes = Router();

routes.get('/cars', getAllCarsController);

