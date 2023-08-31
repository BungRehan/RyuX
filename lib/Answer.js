const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

module.exports = function(question, context){
    const sentences = context.toLowerCase().split(/\.|\?|!|\n|,/);
        const similarityThreshold = 0.5;
        let maxSimilarity = 0;
        let bestSentence = null;

        const questionTokens = tokenizer.tokenize(question.toLowerCase());

        for (let i = 0; i < sentences.length; i++) {
            const sentence = sentences[i].trim();
            if (sentence === "") continue;

            const sentenceTokens = tokenizer.tokenize(sentence.toLowerCase());

            const similarity = natural.JaroWinklerDistance(questionTokens.join(' '), sentenceTokens.join(' '), { ignoreCase: true });

            if (similarity > maxSimilarity && similarity >= similarityThreshold) {
                maxSimilarity = similarity;
                bestSentence = sentence;
            }
        }

        if (bestSentence) {
            return `${bestSentence}`;
        }
        return `Sorry, but according to my data, I don't have data about ${question} try ask something else`;
}