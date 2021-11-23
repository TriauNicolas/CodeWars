const MORSE_CODE = {".-": "a", "-...":"b", "-.-.": "c", "-..": "d", ".":"e", "..-.":"f", "--.":"g", "....":"h", "..":"i", ".---":"j", "-.-":"k", ".-..":"l", "--":"m", "-.":"n", "---":"o", ".--.":"p", "--.-":"q", ".-.":"r", "...":"s", "-":"t", "..-":"u", "...-":"v", ".--":"w", "-..-":"x", "-.--":"y", "--..":"z", ".----":"1", "..---":"2", "...--":"3", "....-":"4", ".....":"5", "-....":"6", "--...":"7", "---..":"8", "----.":"9", "-----":"0", "|":" "};


const decodeMorse = (morseCode) => {
    let splitedMorse = morseCode.split('');
    index = 0;
    letter = "";
    completeWords = "";
    
    while (index < splitedMorse.length) {

        if(splitedMorse[index] != " ") {
            letter += splitedMorse[index]

            if(index == splitedMorse.length - 1) {
                completeWords += MORSE_CODE[letter]
            }
        } else if(letter != ""){
            completeWords += MORSE_CODE[letter]
            letter = ""
        }

        if(splitedMorse[index] == " " && splitedMorse[index + 1] == " " && splitedMorse[index + 2] == " ") {
            completeWords += " ";
        }

    index++;
    }
    return completeWords
  }

decodeMorse('.... . -.--   .--- ..- -.. .')