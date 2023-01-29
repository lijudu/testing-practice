function reverseString(string) {
    let splittext = string.split('').reverse().join('')
    return splittext
}

module.exports = reverseString;