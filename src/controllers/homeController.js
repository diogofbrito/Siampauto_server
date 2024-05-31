const homeController = {
	index: (req, res) => {
		const mensagem = {
			mensagem: 'Bem-vindo à minha API!',
		};

		res.json(mensagem);
	},
};

module.exports = homeController;
