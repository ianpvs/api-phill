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
        let { name, birthday, deases, password } = req.body;

        const cryptedPassword = await bcrypt.hash(password, 10).then(function (hash) {
            return hash;
        });

        const user = await Users.create({
            name,
            birthday,
            deases,
            password: cryptedPassword
        });

        return res.json(user);
    },

    async login(req, res) {
        const { email, password } = res.body;

        if (!email || !password) {
            return res.status(200).json({ msg: "Informe o e-mail e senha!" });
        }

        const user = Users.find({ email: email });

        if (!user) {
            return res.status(200).json({ msg: "Usuário não encontrado!" });
        }

        const match = bcrypt.compareSync(password, user.password)

        if (!match) return res.status(200).json({ msg: "Senha inválida!" });

        const now = Math.floor(Date.now() / 1000);

        const payload = {
            ...user,
            iat: Date.now(),
            exp: now + (60 * 60 * 24)
        }

        return res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        });
    }
}