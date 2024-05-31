const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const marcasController = {
	async criarMarca(req, res) {
		const { nome } = req.body;

		try {
			const novaMarca = await prisma.marca.create({
				data: { nome },
			});
			res.status(201).json(novaMarca);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao criar marca' });
		}
	},

	async listarMarcas(req, res) {
		try {
			const marcas = await prisma.marca.findMany();
			res.json(marcas);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao listar marcas' });
		}
	},

	async obterMarca(req, res) {
		const { id } = req.params;

		try {
			const marca = await prisma.marca.findUnique({
				where: { id: parseInt(id) },
			});

			if (!marca) {
				return res.status(404).json({ error: 'Marca não encontrada' });
			}

			res.json(marca);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao obter marca' });
		}
	},

	async atualizarMarca(req, res) {
		const { id } = req.params;
		const { nome } = req.body;

		try {
			const marcaAtualizada = await prisma.marca.update({
				where: { id: parseInt(id) },
				data: { nome },
			});
			res.json(marcaAtualizada);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao atualizar marca' });
		}
	},

	async excluirMarca(req, res) {
		const { id } = req.params;

		try {
			await prisma.marca.delete({
				where: { id: parseInt(id) },
			});
			res.json({ mensagem: 'Marca excluída com sucesso' });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao excluir marca' });
		}
	},
};

module.exports = marcasController;
