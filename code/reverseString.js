function reverseString(string) {
    let splittext = string.split('')
    splittext.reverse()
    const newstring = splittext.join('')
    return newstring
}

module.exports = reverseString;