
//Apuntes:

//Crear tag "p" asignar al div con id 'resultados';
// var p = document.createElement("p"); 
// document.getElementById('resultados').appendChild(p)

// //Strong;
// var strong = document.createElement("strong");
// var text_strong = document.createTextNode("Letras: ")

// p.appendChild(strong);
// strong.appendChild(text_strong);

// //Span;
// var span = document.createElement("span");
// var text_span = document.createTextNode("Cantidad: ")

// p.appendChild(span);
// span.appendChild(text_span);




// Letras
function getDocumentLetters() {
    var textEntrada = document.querySelector('#texto-entrada').textContent;
    return textEntrada.replace(/[^-a-z0-9]/ig, '').toUpperCase().split("");
    //filtrar el string con regex, convertir a mayuscula y separar los caracteres en array (split)
}

function countLetters(text) {
    var result = {}
    text.forEach(letter => {
        if (!result[letter]) {
            result[letter] = 1;
        }
        else {
            result[letter] += 1;
        }
    })
    return result;
}

function insertLetterResults(result) {
    var resultsArray = Object.entries(result)
    resultsArray.forEach(values => {
        // Crear la etiqueta p para luego asiganrlo al nodo div con id 'resultados'
        var p = document.createElement("p");
        document.getElementById('resultados').appendChild(p);

        var strong = document.createElement("strong");
        strong.innerHTML = `Letra: ${values[0]} `;
        p.appendChild(strong);

        var span = document.createElement("span");
        span.innerHTML = `Cantidad: ${values[1]} `;
        p.appendChild(span);

        
    })
}

function letterCount() {
    var letters = getDocumentLetters();
    var results = countLetters(letters);
    insertLetterResults(results);
}

letterCount();

// Palabras repetidas

function getDocumentWords() {
    var textEntrada = document.querySelector('#texto-entrada').textContent;
    return textEntrada.match(/\b(\w+)\b/g);
}

function countWords(wordArray) {
    var result = {}
    wordArray.forEach(word => {
        var upWord = word.toUpperCase();
        if (!result[upWord]) {
            result[upWord] = 1;
        }
        else {
            result[upWord] += 1;
        }
    })
    return result;
}

function insertWordResults(result) {
    var resultsArray = Object.entries(result)
    resultsArray.forEach(values => {
        
        var p = document.createElement("p");
        document.getElementById('resultados').appendChild(p);

        
        var strong = document.createElement("strong");
        strong.innerHTML = `Palabra: ${values[0]}`;
        p.appendChild(strong);

        var span = document.createElement("span");
        span.innerHTML = `Cantidad: ${values[1]}`;
        p.appendChild(span);

    
    })
}

function wordCount() {
    var words = getDocumentWords();
    var results = countWords(words);
    insertWordResults(results);
}

wordCount();