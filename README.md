## RyuX Module

The RyuX module is a JavaScript class designed to perform various text processing tasks, including finding answers, filtering inappropriate content, and extracting keywords from text. It utilizes several external libraries to accomplish these tasks.

### Installation

To use the RyuX module, you need to have Node.js installed on your system. You can then install the required dependencies by executing the following command in your project directory:

```bash
npm install natural keyword-extractor bad-words
```

### Usage

You can integrate the RyuX module into your project by requiring it and creating an instance of the `RyuX` class:

```javascript
const RyuX = require('./path/to/RyuX'); // Adjust the path accordingly

const ryuXInstance = new RyuX();
```

#### `findAnswer(question, context)`

This method takes a `question` and a `context` as input and attempts to find the most relevant sentence from the context that can answer the given question. It uses the Jaro-Winkler distance algorithm to measure the similarity between the question and sentences in the context.

```javascript
const question = "What is france capital city?";
const context = "France is a beautifull county. France Capital City is Paris";
const answer = ryuXInstance.findAnswer(question, context);
console.log(answer); // Outputs: "France Capital City is Paris"
```

#### `cleanBadword(sentence)`

This method takes a `sentence` as input and filters out any inappropriate or offensive words using the `bad-words` library.

```javascript
const dirtySentence = "This is a sentence with bad words like shit.";
const cleanSentence = ryuXInstance.cleanBadword(dirtySentence);
console.log(cleanSentence); // Outputs: "This is a sentence with bad words like ****."
```

#### `filterNsfw(sentence)`

This method checks if a given `sentence` contains any NSFW (Not Safe for Work) keywords from the predefined list. If such keywords are found, it indicates that the content may be inappropriate.

```javascript
const nsfwSentence = "Check out this sexy content!";
const isNsfw = ryuXInstance.filterNsfw(nsfwSentence);
console.log(isNsfw); // Outputs: true
```

#### `getKeyword(sentence)`

This method extracts keywords from a given `sentence` using the `keyword-extractor` library. It returns an array of keywords extracted from the input sentence.

```javascript
const text = "Natural language processing is a subfield of artificial intelligence.";
const keywords = ryuXInstance.getKeyword(text);
console.log(keywords); // Outputs an array of extracted keywords
```

### Disclaimer

This module showcases how to perform certain text processing tasks using external libraries. Keep in mind that the effectiveness of content filtering and keyword extraction depends on the libraries used and the quality of the input data. Always review and adjust the implementation to suit your project's requirements and ethical considerations.
