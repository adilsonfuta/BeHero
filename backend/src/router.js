const express=require('express');
const routes=express.Router();

const ongController=require('./Controllers/ongsController');
const incidentsController=require('./Controllers/incidentsController');
const profilecontroller=require('./Controllers/ProfileController');
const SessionController=require('./Controllers/sessionController');

routes.post('/ongs', ongController.create);  // inserindo dados vindo da api (insomina ) na bd
routes.get('/ongs', ongController.index);    // listar todo da bd ongs 


routes.post('/incidents',incidentsController.create);
routes.get('/incidents',incidentsController.index);
routes.delete('/incidents/:id',incidentsController.delete);

routes.get('/profile',profilecontroller.index);
routes.post('/session',SessionController.create);

module.exports=routes;

