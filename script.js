function isPalindrome(str){
    let frase=str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let fraseInvertida=frase.split("").reverse().join("");
    if(frase===fraseInvertida){
        return true;
    }else{
        return false;
    }
    
}

function arrayMaxMin(arr){
    /* Seu código aqui */
}
