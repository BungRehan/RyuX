const answer = require('./lib/Answer');
const nsfwContent = require('./lib/BlockNsfw');
const keyword = require('./lib/Keyword');
const sensors = require('./lib/Sensors');

class RyuX {
    constructor() {
        console.log('[RyuX-System] RyuX loaded to script...');
    }

    findAnswer(question, context) {
        return answer(question, context);
    }

    cleanBadword(sentence) {
        return sensors(sentence);
    }

    filterNsfw(sentence) {
        return nsfwContent(sentence);
    }

    getKeyword(sentence) {
        return keyword(sentence)
    }
}
module.exports = RyuX;