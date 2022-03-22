import express from 'express';
//import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

//iniciando variavel de ambiente , que sera guardada no arquivo .env
//dotenv.config();
//iniciando servidor
const server = express();

//setando a engine de vizualização mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

//Rotas
server.use(mainRoutes);

server.use((req, res)=>{
    res.send('Página não encontrada.')
})




server.listen(3000);