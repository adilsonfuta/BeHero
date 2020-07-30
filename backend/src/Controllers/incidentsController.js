const connect = require('../database/connection');


module.exports = {

    async create(request, response) {
        const {
            title,
            description,
            value
        } = request.body;
        // usar cabeçalho da req pra ter dados de sessao: localizacao,idioma,etc, autenticao REQUEST.HEARDER

        const ong_id = request.headers.authorization;

        const [id] = await connect('incidents').insert({
            title,
            description,
            value,
            ong_id
        });
        return response.json({
            id
        });

    }, 

    async index(request, response) {
        
        const {page = 1}= request.query;
        
        const [count]= await connect('incidents')
        .count();
          
        const listacasos = await connect('incidents')
        .join('ongs', 'ongs.id','=','incidents.ong_id')
        .limit(5).offset((page-1)*5)
        .select(['incidents.*','ongs.name','ongs.email','ongs.whatsapp','ongs.city','ongs.uf']);

        // enviando o total de incidents pelo count(*)
        response.header('X-Total-Count',count['count(*)']);
        return response.json(listacasos);
    },

    // bug no metodo eliminar
    async delete(request, response) { // o delete demora muito no insonia 
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        const eliminar = await connect('incidents')
            .where('id', id).select('ong_id').first();

        // nao preve casos de id inexistente
        if (eliminar.ong_id != ong_id) {
            
            console.log(eliminar.ong_id)
            console.log(eliminar.ong_id + ' =  ' + ong_id);
            
            return response.status(401).json({
                error: "Operação não permitida"
            });
        } else 
            
        await connect('incidents').where('id', id).delete();
        return response.status(204).send();
    }
}