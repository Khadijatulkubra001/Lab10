function task04 (str) {
    var reverse =''
    for(var i = str.length-1; i>=0; i--) {
        reverse = reverse + str[i]

    }

    return reverse
}

module.exports.task04 = task04