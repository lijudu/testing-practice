function capitalize(string) {
    let letter = string.charAt(0)
    letter = letter.toUpperCase()
    const newstring = letter + string.slice(1)
    return newstring
}

module.exports = capitalize;