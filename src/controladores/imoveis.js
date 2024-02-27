const imoveis = require('../dados/imoveis');

// Função para obter todos os imóveis
function get(req, res) {
    res.json(imoveis);
}

// Função para obter um imóvel por ID
function getPorId(req, res) {
    const id = parseInt(req.params.id);
    const imovel = imoveis.find(imovel => imovel.id === id);

    if (imovel) {
        res.json(imovel);
    } else {
        res.status(404).send('Imóvel não encontrado');
    }
}

module.exports = { get, getPorId };
