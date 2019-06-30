const UserController = require('./controllers/UserController');
const PhillController = require('./controllers/PhillController');

module.exports = app => {
    app.route('/users')
        .all(app.src.config.passport.authenticate())
        .post(UserController.store)
        .get(UserController.index)

    app.route('/phill')
        .post(PhillController.store)
        .get(PhillController.index)

    app.route('/phill/:id')
        .get(PhillController.show)
}