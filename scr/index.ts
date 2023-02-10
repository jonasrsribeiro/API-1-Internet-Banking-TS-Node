// Importa o servidor criado em ./server/server
import { server } from "./server/server";

// Inicia o servidor na porta 3333
server.listen(3333, () => console.log('App rodando!'));