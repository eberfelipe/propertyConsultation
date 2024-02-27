const express = require('express');
const roteador = require('./roteador');

const app = express();
const port = 8000;

app.use(express.json());
app.use('/', roteador);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
