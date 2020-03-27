const connection = require('../database/connection');

module.exports = {

    async index (request, response) {
        const ongs = await connection('incidents').select('*');

        return response.json(ongs);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ond_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title, 
            description,
            value, 
            ong_id,
        });

        return response.json({ id });
    }
}