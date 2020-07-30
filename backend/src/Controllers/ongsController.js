const connect=require('../database/connection');
const crypto=require('crypto');


module.exports={

    // varios metodos separados por virgulas  

    async create(request,response){
        
        const {name, email, whatsApp, city, uf }=request.body;  
        const id=crypto.randomBytes(4).toString('HEX'); 
                
         await connect('ongs').insert( {
                id,
                name,
                email,
                whatsApp,
                city,
                uf,
            })

        return response.json(  id );
    },

    async index(request,response){
        const ongs= await connect('ongs').select('*');
        return response.json(ongs);
    }

};