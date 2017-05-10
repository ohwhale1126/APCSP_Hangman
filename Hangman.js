var terms = [
["F", "U", "N", "C", "T", "I", "O", "N"]
  , ["V", "A", "R", "I", "A", "B", "L", "E"]
  , ["S", "T", "R", "I", "N", "G"]
  , ["N", "U", "M", "B", "E", "R"]
  , ["B", "O", "O", "L", "E", "A", "N"]
  , ["Q", "U", "N", "I", "T"]
  , ["C", "S", "S"]
  , ["H", "T", "M", "L"]
  , ["G", "I", "T", "H", "U", "B"]
  , ["J", "A", "V", "A", "S", "C", "R", "I", "P", "T"]
  , ["B", "O", "O", "T", "S", "T", "R", "A", "P"]

]
    // Gets a random term
var random = Math.floor((Math.random() * (terms.length - 1)));
// Chooses a word from the term array
var wordChooser = terms[random];
var newWord = new Array(wordChooser.length);
var error = 0;
console.log(wordChooser);
// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < newWord.length; i++) {
    newWord[i] = "_ ";
}
