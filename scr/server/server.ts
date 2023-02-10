// Importação do Express
import express from 'express';

// Criação do servidor, que será representado pela variável 'server'
const server = express();

// Route handler(Manipulador de rota) para a raíz da aplicação. Retornando o string "Olá, bem vindo!" como resposta.
server.get('/', (req, res) => {
    return res.send("Olá, bem vindo!");
})

// Exportação do servidor criado
export { server };
