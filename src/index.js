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
    expr = expr.toLowerCase();
    const LETTERS = expr.match(/.{1,10}/g);
    let result = '';

    LETTERS.forEach(letter => {
        if (letter === '**********') {
            result += ' ';

        } else {
            const BYTES = letter.match(/.{1,2}/g);
            let morse = '';

            BYTES.forEach(byte => {
                if(byte === '10') {
                    morse += '.';
                } else if(byte === '11') {
                    morse += '-';
                }
            });
            result += MORSE_TABLE[morse];
        }
    });

    return result;
}

module.exports = {
    decode
}