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
    }
}