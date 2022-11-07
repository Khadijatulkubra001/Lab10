function task05(arr, element) {
    for (var i=0; i< arr.length; i++) {
        if (arr[i]  == element) {
            return true
        }
    }
    return false
}

module.exports.task05 = task05