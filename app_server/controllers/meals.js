const fs = require('fs');
const food = JSON.parse(fs.readFileSync('./data/food_options.json', 'utf8'));

/*GET meals view */
const meals = (req, res) => {
    res.render('meals', {title: 'Meals', food});
};

module.exports = {
    meals
};