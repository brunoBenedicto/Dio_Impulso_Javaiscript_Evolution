import express from "express";
import statusRoute from "./routes/status.routes";
import usersRoute from "./routes/users.routes";
import errorHandler from "./middlewares/error-handler.middleware";

const app = express();

app.use(express.json());//para ler json
app.use(express.urlencoded({extended: true}));

//rotas
app.use(usersRoute);
app.use(statusRoute);

// handlers de erro
app.use(errorHandler);
//inicialização do servidor
app.listen(3005, ()=>{
    console.log('rodando na porta 3005!!!');
})