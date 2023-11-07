const fs = require('fs');
const type = JSON.parse(fs.readFileSync('./data/roomTypes.json', 'utf8'));

/*GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', {title: 'Travlr Rooms', type});
};

module.exports = {
    rooms
};