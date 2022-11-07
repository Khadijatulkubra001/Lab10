function task02 (x, y ,z) {
    var sum=0
    for (var i =0; i<z; i++) {
        if ( i % x == 0) {
            sum = sum + i
        }
        if(i%y == 0) {
            sum = sum + i
        }
    }
    return sum

}

module.exports.task02 = task02