const filter = require('bad-words');
const sensors = new filter();

module.exports = function(sentence){
    return sensors.clean(sentence);
}