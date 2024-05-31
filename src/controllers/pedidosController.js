const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const pedidosController = {
	async criarPedido(req, res) {
		const { cliente_id, carros_id, valor } = req.body;

		try {
			const novoPedido = await prisma.pedidos.create({
				data: {
					cliente_id: parseInt(cliente_id), 
					carros_id: parseInt(carros_id),
					valor,
					data_criacao: new Date(), 
				},
			});

			res.status(201).json(novoPedido);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao criar pedido' });
		}
	},

	async listarPedidos(req, res) {
		try {
			const pedidos = await prisma.pedidos.findMany({
				include: {
					clientes: true, 
					carros: true, 
				},
			});

			res.json(pedidos);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao listar pedidos' });
		}
	},

	async listarPedidosPorCliente(req, res) {
		const cliente_id = parseInt(req.params.cliente_id);

		try {
			const pedidos = await prisma.pedidos.findMany({
				where: { cliente_id },
				include: {
					clientes: true,
					carros: true,
				},
			});

			res.json(pedidos);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao listar pedidos por cliente' });
		}
	},
};

module.exports = pedidosController;
