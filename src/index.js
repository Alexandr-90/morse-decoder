const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let array = [];
    let signArray = []
    let letterOfSign = []
    let pureLetters = []

    for (let index = 0; index < expr.length; index += 10) {
        letter = expr.substr(index, 10);
        array.push(letter);
    }
   // separate incoming string to 10-symbols elements and put it array

    array.forEach(element => {
        changeNumToMorze(element);
    });
    


    function changeNumToMorze(str) { 

        
        let twoSymbolArray = [];

        for (let index = 0; index < str.length; index += 2) { //separate array to two-symbols array
            sign = str.substr(index, 2);
            twoSymbolArray.push(sign);
        }

   
     
        twoSymbolArray.forEach(item => { //from two symbol one morze element
            
            if (item === '10'){
                signArray.push('.');
            } else if (item === '11'){
                signArray.push('-');
            }
        });
        letterOfSign.push(signArray.join('')) 
        signArray = [];
    }


    letterOfSign.forEach(element => { // each element in letterOfSign array is a key of MORSE_TABLE item expect ' '
            if (element === '') {
                    pureLetters.push(' ');
                }
            pureLetters.push(MORSE_TABLE[element]);

            
        
    });
    return String(pureLetters.join('')); // join array elements and create a string

}
module.exports = {
    decode
}

