var terms = [];
var word; // Selected word
var hiddenWord; //selected word with letters replaced by "-"
var guess; // Geuss
var wrongLetter = []; //incorrect guess
var correctLetter = []; //correct guess
var lives = 10; // Lives
//1. get word 2. hide word 3.the user guesses incorrect 3.1. subtract a life 3.2.add to incorrect array 3.3. add to canvas ||| 4. user guesses correct 4.1 change correct dash to letter 4.2 add to correct letter array

//hideword. word= dog. take dog, change each letter into '-'. if number of characters in dog is greater than one, push '-' into a new array . if length is less than one stop function
function hideWord() {
    var characters = word.length;
    for (characters >= 1) {
        var hiddenWord = word.replace(/\s/g, "-");
    }
    return hiddenWord;
}
//count lives and display corresponding image
//ALYSSA READ THIS: this function Should Work but I cant test it rn bcause the whole lives thing isnt working rn so ¿?¿?¿?
function showImage() {
    var image;
    if (lives == 10) {
        var image == "<img src ='hangman/hangman1.png'/>";
    }
    if (lives == 9) {
        var image == "<img src ='hangman/hangman2.png'/>";
    };
    if (lives == 8) {
        var image == "<img src ='hangman/hangman3.png'/>";
    };
    if (lives == 7) {
        var image == "<img src ='hangman/hangman4.png'/>";
    };
    if (lives == 6) {
        var image == "<img src ='hangman/hangman5.png'/>";
    };
    if (lives == 5) {
        var image == "<img src ='hangman/hangman6.png'/>";
    };
    if (lives == 4) {
        var image == "<img src ='hangman/hangman7.png'/>";
    };
    if (lives == 3) {
        var image == "<img src ='hangman/hangman8.png'/>";
    };
    if (lives == 2) {
        var image == "<img src ='hangman/hangman9.png'/>";
    };
    if (lives == 1) {
        var image == "<img src ='hangman/hangman10.png'/>";
    };
    if (lives == 0) {
        var image == "<img src ='hangman/hangman11.png'/>";
    };
}
function evaluateGuess(){

    if (word.includes(guess)){
        correctLetter.push(guess);
    };
    else {
        wrongLetter.push(guess);
    }
}

function getWord() {
    var terms = ["function", "variable", "string", "number", "boolean", "Qunit", "Math", "camelcase", "cascading style sheets", "binary", "hexadecimal", "bootstrap", "github", "modulus", "html", "javascript"];
    var word = terms[Math.floor(Math.random() * terms.length)];
}

function getLetter(n) {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'
        , 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's'
        , 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    try {
        if (areaCode.length == 3 && Number(areaCode)) {
            return n;
        }
        else {
            throw new Error("Invalid area code: " + areaCode);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}
/**
 * Displays the area code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @return {string} outputId; Displays the area code to user
 */
function displayLetter(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var letter = getLetter(n);
        outputText = "Your area code is " + letter;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
}
