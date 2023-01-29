function capitalize(string) {
    let letter = string.charAt(0).toUpperCase() + string.slice(1)
    return letter
}

module.exports = capitalize;