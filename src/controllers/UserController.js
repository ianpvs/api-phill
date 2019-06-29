const Users = require('../models/users');

module.exports = {
    async index(req, res) {
        const users = await Users.find().sort('-createdAt');

        return res.json(users);
    },

    async store(req, res) {
        const { name, birthday, deases } = req.body;

        const user = await Users.create({
            name,
            birthday,
            deases
        });
        return res.json(user);
    }
}