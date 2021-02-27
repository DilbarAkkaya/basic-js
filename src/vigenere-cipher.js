let alphabetLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
class VigeneremessageingMachine {
    constructor(isDirectMachine) {
        if (isDirectMachine === undefined) {
            this.isDirectMachine = true;
    } else {this.isDirectMachine = isDirectMachine;
    }
  }
    encrypt(message, key) {
        if (!message || !key) throw new Error();
        let arrText = message.toLowerCase().split('');
        let arrKey = key.toLowerCase().split('');
        let arrayForDifference = [];
        let result = [];
        for (let i = 0; i < arrText.length; i++) {
            if (alphabetLetters.includes(arrText[i])) {
                if (arrKey.length < arrText.length) {
                    arrKey.push(arrKey[i]);
                }
                if (((alphabetLetters.indexOf(arrText[i])) + (alphabetLetters.indexOf(arrKey[i])) >= 26)) {
                    arrayForDifference.push(((alphabetLetters.indexOf(arrText[i])) + (alphabetLetters.indexOf(arrKey[i]))) - 26);
                } else {
                    arrayForDifference.push(((alphabetLetters.indexOf(arrText[i])) + (alphabetLetters.indexOf(arrKey[i]))));
                }
                result.push(alphabetLetters[arrayForDifference[i]]);
            } else {
                result.push(arrText[i]);
                arrKey.splice(i, 0, ' ');
                arrayForDifference.splice(i, 0, arrText[i]);
            }
        }
        return this.isDirectMachine ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase();
    }

    decrypt(message, key) {
        if (!message || !key) throw new Error();
        let arrmessage = message.toLowerCase().split('');
        let arrKey = key.toLowerCase().split('');
        let arrayForDifference = [];
        let result = [];
        for (let i = 0; i < arrmessage.length; i++) {
            if (alphabetLetters.includes(arrmessage[i])) {
                if (arrKey.length < arrmessage.length) {
                    arrKey.push(arrKey[i]);
                }
                if (alphabetLetters.indexOf(arrmessage[i]) < alphabetLetters.indexOf(arrKey[i])) {
                    arrayForDifference.push(((alphabetLetters.indexOf(arrmessage[i])) - (alphabetLetters.indexOf(arrKey[i]))) + 27);
                } else {
                    arrayForDifference.push(((alphabetLetters.indexOf(arrmessage[i])) - (alphabetLetters.indexOf(arrKey[i]))) + 1);
                }
                result.push(alphabetLetters[arrayForDifference[i] - 1]);
            } else {
                result.push(arrmessage[i]);
                arrKey.splice(i, 0, ' ');
                arrayForDifference.splice(i, 0, arrmessage[i]);
            }
        }
        return this.isDirectMachine ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase();
    }
}
module.exports = VigeneremessageingMachine;
