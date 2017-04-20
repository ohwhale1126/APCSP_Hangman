window.onload = function () {
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'
        , 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's'
        , 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var terms = [];
        var word; // Selected word
        var hiddenWord; //selected word with letters replaced by "-"
        var guess; // Geuss
        var wrongLetter = []; //incorrect guess
        var correctLetter = []; //correct guess
        var lives; // Lives
        //1. get word 2. hide word 3.the user guesses incorrect 3.1. subtract a life 3.2.add to incorrect array 3.3. add to canvas ||| 4. user guesses correct 4.1 change correct dash to letter 4.2 add to correct letter array
        function getWord() {
            var terms = ["function", "variable", "string", "number", "boolean", "Qunit", "Math", "camelcase", "cascading style sheets", "binary", "hexadecimal", "bootstrap", "github", "modulus", "html", "javascript"];
            var word = terms[Math.floor(Math.random() * terms.length)];
        }

        function hideWord() {
            var characters = word.length;
            for (i; i < characters; i++){
             var hiddenWord = word.replace(/\s/g, "-");
            }
            return hiddenWord;
        }
    //count lives and display corresponding image
    function selectImage(){

    }

        function showLives() {}
