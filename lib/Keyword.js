const keyword_extractor = require("keyword-extractor");

module.exports = function(sentence){
    const result = keyword_extractor.extract(sentence,{
        language:"english",
        remove_digits: true,
        return_changed_case:true,
        remove_duplicates: true
    
    });
    return result;
}