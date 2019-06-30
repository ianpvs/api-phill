const axios = require('axios');
const Phill = require('../models/phill');

module.exports = {
    async index(req, res) {
        const phill = await Phill.find().sort('-createdAt');

        return res.json(phill);
    },

    async store(req, res) {
        const { sintomas, user_id } = req.body;

        const phill = await Phill.create({
            sintomas,
            user_id
        });
        return res.json(phill);
    },

    async show(req, res) {
        const id = req.params.id;
        const data = await Phill.find({ user_id: id }).sort('-createdAt');
        return res.json(data);
    },

    async postToPhill(req, res) {
        const { sintomas, user_id } = req.body;
        const result = await axios.post('http://localhost:5000/output', { sintomas, user_id })
        console.log(result.data);
        return res.status(200);
        
    }
}