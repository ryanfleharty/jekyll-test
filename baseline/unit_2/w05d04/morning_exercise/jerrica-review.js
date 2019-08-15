// findWordFrequencies function
const findWordFrequencies = (sentence) => {
  // initialize an empty object to return at the end
  const wordFrequencies = {}

  // split the sentence into an array of its words
  // lowercase the sentence
  let wordsArray = sentence.toLowerCase().split(" ")

  // loop through the sentence array
  for (let word of wordsArray) {
    // check if the current word is a key inside of the wordFrequencies object
    if(wordFrequencies[word]) {
      // if it is, then increment the key's value by one
      wordFrequencies[word]++
    } else {
        // if it isnt, make the word a key inside of the object with a value of 1
        wordFrequencies[word] = 1
    }
  }

  // return the wordFrequencies object
  return wordFrequencies
}

// findHighestFrequency function
const findHighestFrequency = (wordFrequencies) => {
  // initialize empty highestWords object
  const highestWords = {}
  // initialize a higestValue variable
  let highestFrequency = 0

  // loop through the wordFrequencies object to find the highestFrequency
  for (let word in wordFrequencies) {
    if (wordFrequencies[word] > highestFrequency) { // if the current word's frequency is higher than the current highestFrequency
      // change highestFrequency to equal the current word's frequency
      highestFrequency = wordFrequencies[word]
    }
  }

  // loop through the wordFrequencies object to find the word(s) that matches the highestFrequency
  for (let word in wordFrequencies) {
    if (wordFrequencies[word] === highestFrequency) { // if the current word's frequency = highestFrequency
    // make it a key value pair inside of the highestWords object
      highestWords[word] = highestFrequency
      break
    }
  }

  // return the highestWords object
  return highestWords
}


console.log(findHighestFrequency(findWordFrequencies("The quick quick brown fox jumps over the lazy dog")))
