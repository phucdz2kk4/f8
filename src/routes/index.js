const router = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', router);
    app.use('/', siteRouter);
}

module.exports = route;
