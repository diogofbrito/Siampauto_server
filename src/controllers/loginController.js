const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginController = {
	async login(req, res) {
		const { email, password } = req.body;

		try {
			const usuario = await prisma.clientes.findUnique({
				where: { email },
			});

			if (!usuario) {
				return res.status(401).json({ error: 'Credenciais inválidas' });
			}

			const senhaValida = await bcrypt.compare(password, usuario.password);

			if (!senhaValida) {
				return res.status(401).json({ error: 'Credenciais inválidas' });
			}

			const token = jwt.sign({ userId: usuario.id }, 'meu token em jwt', { expiresIn: '1h' });

			res.json({ mensagem: 'Login bem-sucedido', token, usuario }); 
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro no servidor' });
		}
	},
};

module.exports = loginController;
