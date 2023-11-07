const fs = require('fs');
const latest = JSON.parse(fs.readFileSync('./data/latest_news.json', 'utf8'));
const tips = JSON.parse(fs.readFileSync('./data/tips.json', 'utf8'));

/*GET news view */
const news = (req, res) => {
    res.render('news', {title: 'Travlr News', latest, tips});
};

module.exports = {
    news
};