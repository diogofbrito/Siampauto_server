const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

const clientesController = {
	async criarCliente(req, res) {
		const { nome, nif, email, password } = req.body;

		try {
			const hashedPassword = await bcrypt.hash(password, 10); 

			const novoCliente = await prisma.clientes.create({
				data: { nome, nif, email, password: hashedPassword },
			});

			res.status(201).json(novoCliente);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao criar cliente' });
		}
	},

	async listarClientes(req, res) {
		try {
			const clientes = await prisma.clientes.findMany();
			res.json(clientes);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao listar clientes' });
		}
	},

	async obterCliente(req, res) {
		const { id } = req.params;

		try {
			const cliente = await prisma.clientes.findUnique({
				where: { id: parseInt(id) },
			});

			if (!cliente) {
				return res.status(404).json({ error: 'Cliente não encontrado' });
			}

			res.json(cliente);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao obter cliente' });
		}
	},

	async atualizarCliente(req, res) {
		const { id } = req.params;
		const { nome, nif, email, password } = req.body;

		try {
			let dataToUpdate = { nome, nif, email };
			if (password) {
				const hashedPassword = await bcrypt.hash(password, 10);
				dataToUpdate.password = hashedPassword;
			}

			const clienteAtualizado = await prisma.clientes.update({
				where: { id: parseInt(id) },
				data: dataToUpdate,
			});
			res.json(clienteAtualizado);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao atualizar cliente' });
		}
	},

	async excluirCliente(req, res) {
		const { id } = req.params;

		try {
			await prisma.clientes.delete({
				where: { id: parseInt(id) },
			});
			res.json({ mensagem: 'Cliente excluído com sucesso' });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao excluir cliente' });
		}
	},
};

module.exports = clientesController;
