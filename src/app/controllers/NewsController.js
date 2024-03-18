class NewsController {
    // [Get] /news
    index(req, res) {
        res.render('news');
    }
    // [Get] /news/:slug
    show(req, res) {
        res.render('NEW DETAILS!');
    }
}

module.exports = new NewsController();
