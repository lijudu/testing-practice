function caesar(str, num) {
    // num modulo 26 because 26 letters in alphabet, times by shift you want (num)
    num = num % 26; 
    // convert given string to lowercase
    var lowerCaseStr = str.toLowerCase();
    // split alphabet into each letter
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // will compile new string into newstring
    var newStr = "";

    // go through each letter in given string all lowercase
    for(var i = 0; i < lowerCaseStr.length; i++) {
        var currentLetter = lowerCaseStr[i];
        // if current letter is a punctuation, concatenate (ie, keep punctuation)
        if(currentLetter.toLowerCase() === currentLetter.toUpperCase()) {
            newStr += currentLetter;
            continue;
        }
        // find index of given letter in string
        var currentIndex = alphabet.indexOf(currentLetter);
        // get new index added by modulo 26 * number shift 
        var newIndex = currentIndex + num; 
        // if this new index goes past 'z', then return back to star at 'a' by minus26 
        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = newIndex + 26; 
        // if letter at position is an uppercase, then keep uppercase 
        if (str[i] === str[i].toUpperCase()) {
            newStr += alphabet[newIndex].toUpperCase();
        }
        else newStr += alphabet[newIndex];
    }
    return newStr;
}

module.exports = caesar