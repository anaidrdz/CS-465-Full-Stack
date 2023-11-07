const fs = require('fs');
const main = JSON.parse(fs.readFileSync('./data/indexpage.json', 'utf8'));
const sidebar = JSON.parse(fs.readFileSync('./data/index_sidebar.json', 'utf8'))

const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways', main, sidebar})
};

module.exports = {
    index
}