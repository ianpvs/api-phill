const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const { authSecret } = require('../../.env')

const Users = require('../models/users');

module.exports = {
    async index(req, res) {
        const users = await Users.find().sort('-createdAt');

        return res.json(users);
    },

    async store(req, res) {
        let { name, birthday, deases, password, email } = req.body;

        const cryptedPassword = await bcrypt.hash(password, 10).then(function (hash) {
            return hash;
        });

        const user = await Users.create({
            name,
            email,
            birthday,
            deases,
            password: cryptedPassword
        });

        return res.json(user);
    },

    async login(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(200).json({ msg: "Informe o e-mail e senha!" });
        }

        const user = await Users.findOne({ email: email }, (err, data) => data);

        if (!user) {
            return res.status(200).json({ msg: "Usuário não encontrado!" });
        }

        const cryptedPassword = await bcrypt.hash(password, 10).then(function (hash) {
            return hash;
        });

        const match = bcrypt.compare(cryptedPassword, user.password)

        if (!match) return res.status(200).json({ msg: "Senha inválida!" });

        const now = Math.floor(Date.now() / 1000);

        const payload = {
            ...user,
            iat: now,
            exp: now + (60 * 60 * 24)
        }

        return res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        });
    }
}