const express = require('express');
const { get, getPorId } = require('./controladores/imoveis');

const roteador = express.Router();

// Configuração das rotas para imóveis
roteador.get('/imoveis', get);
roteador.get('/imoveis/:id', getPorId);

module.exports = roteador;
