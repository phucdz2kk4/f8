class NewsController {
    // Get news
    index(req, res) {
        res.render('Home');
    }
    // Get search
    search(req, res) {
        res.render('Search');
    }
}

module.exports = new NewsController();

const newsController = require('./NewsController');
