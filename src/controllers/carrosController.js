const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const carrosController = {
	async criarCarro(req, res) {
		const { marca_id, modelo, ano, mes, cor, combustivel, fotos } = req.body;

		try {
			const novoCarro = await prisma.carros.create({
				data: {
					marca_id,
					modelo,
					ano,
					mes,
					cor,
					combustivel,
					fotosCarros: {
						create: fotos.map(foto => ({ url: foto.url })), 
					},
				},
				include: { fotosCarros: true }, 
			});

			res.status(201).json(novoCarro);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao criar carro' });
		}
	},

	async listarCarros(req, res) {
		try {
			const carros = await prisma.carros.findMany({
				include: { fotosCarros: true }, 
			});
			res.json(carros);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao listar carros' });
		}
	},

	async obterCarro(req, res) {
		const { id } = req.params;

		try {
			const carro = await prisma.carros.findUnique({
				where: { id: parseInt(id) },
				include: { fotosCarros: true }, 
			});

			if (!carro) {
				return res.status(404).json({ error: 'Carro não encontrado' });
			}

			res.json(carro);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao obter carro' });
		}
	},

	async atualizarCarro(req, res) {
		const { id } = req.params;
		const { marca_id, modelo, ano, mes, cor, combustivel, fotos } = req.body;

		try {

			const carroAtualizado = await prisma.carros.update({
				where: { id: parseInt(id) },
				data: { marca_id, modelo, ano, mes, cor, combustivel },
				include: { fotosCarros: true }, 
			});

			res.json(carroAtualizado);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao atualizar carro' });
		}
	},

	async excluirCarro(req, res) {
		const { id } = req.params;

		try {
			await prisma.carros.delete({
				where: { id: parseInt(id) },
			});
			res.json({ mensagem: 'Carro excluído com sucesso' });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao excluir carro' });
		}
	},
};

module.exports = carrosController;
