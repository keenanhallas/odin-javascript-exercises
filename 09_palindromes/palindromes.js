const palindromes = function (string) {
    let chars = string.split("");

    let letters = chars.filter(char => {
        return (char > "@" && char < "[" ||
                char > "`" && char < "{") ||
                char > "/" && char < ";";
    });

    let lowerCase = letters.map(letter => {
        return letter.toLowerCase();
    });

    let forward = lowerCase.join("");
    
    lowerCase.reverse();
    let backward = lowerCase.join("");

    if (forward === backward){
        return true;
    } else return false
};

// Do not edit below this line
module.exports = palindromes;
