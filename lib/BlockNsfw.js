module.exports = function(sentence){
    const adult = ["18+", "sex", "sexy", "hot"];
    const query = sentence.toLowerCase();
        for (let i = 0; i < adult.length; i++) {
            if (query.includes(adult[i])) {
                console.log('[RyuX-System] Blocking 18+ content');
                return true;
            }
        }
    return false;
}