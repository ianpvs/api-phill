const UserController = require('./controllers/UserController');
const PhillController = require('./controllers/PhillController');

module.exports = app => {

    app.post('/signin', UserController.login)
    app.post('/signup', UserController.store);

    app.route('/users')
        .all(app.src.config.passport.authenticate())
        .post(UserController.store)
        .get(UserController.index)

    app.route('/phill')
        .all(app.src.config.passport.authenticate())
        .post(PhillController.store)
        .get(PhillController.index)

    app.route('/postToPhill')
        .all(app.src.config.passport.authenticate())
        .post(PhillController.postToPhill)

    app.route('/phill/:id')
        .all(app.src.config.passport.authenticate())
        .get(PhillController.show)
}