const express = require('express');
const routes=require('./router');
const cors=require('cors');
const app = express();


app.use(cors());
// para usar json ao criar os body do projecto ; cadastro
app.use(express.json()); 
app.use(routes);
app.listen(3333);


















// Criando as rotas / recursos.. para aceder bckend
/**
 * ATT REQUEST recebe da url e Response responde como saida 
 * 
 * get pega info,bkd
 * post criar/enviar info bkd
 * delete eliminar info bkd
 * put atualizar info bkd 
 *   Parametros ==> 
 * [query] params : enviados na rota com (?) ex: localhost:3333/users?name=adilson
 * route [params] : identificar 1 recurso na rota (/:id) (tipo localhost:3333/users/:id) ex: localhost:3333/users/1 * 
 * request [body]  : corpo da request; usando para criar e alterar recurso, 
 * ou seja entrada, usar post-json e editar o modelo do json {"name":"adi", "idade":28 }
 */
/**
 * fazendo uma query pelo nome e idade 
 * na rota:localhost:3333/users?name=Adilson&idade=28
 * no codigo ==> 
        app.get('/users', (request, response) => {
        const params_dados=request.query; 
        return response.json(  params_dados );
});
 */

 /**
 * usando o route param query pelo nome e idade 
 * na rota:localhost:3333/users/1
 * no codigo ==> 
        app.get('/users/:id', (request, response) => {
        const params_id=request.params; 
        return response.json(  params_id );
});
 */

/**
 * trabalhando request body 
 * att:  usar postman ou insomina e post-json e editar o modelo do json {"name":"adi", "idade":28 }
 * na rota:localhost:3333/users  MAS ATT: CRIAR JSON de ENTRADA
 * no codigo ==> 

app.post('/users', (request, response) => {       
        const params_body=request.body;  
         console.log(params_body);
        return response.json(  params_body );
});


 
*/