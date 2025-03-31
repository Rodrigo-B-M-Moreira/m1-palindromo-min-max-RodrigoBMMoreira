function isPalindrome(str) {
    let frase = str.toLowerCase();
    let fraseLimpa = "";
    for (let i = 0; i < frase.length; i++) {
        let char = frase[i];
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            fraseLimpa += char;
        }
    }
    let tamanho = fraseLimpa.length;
    for (let i = 0; i < tamanho / 2; i++) { 
        if (fraseLimpa[i] !== fraseLimpa[tamanho - 1 - i]) {
            return false;
        }
    }
    return true;
}



function arrayMaxMin(arr) {
    /* Seu código aqui */
}
