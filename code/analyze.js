
function analyze(array) {
    let object = {
        average: array.reduce((a,b) => a+b) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length,
    }
    return object
}

module.exports = analyze