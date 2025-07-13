// YOUR CODE BELOW
function myForEach(array, callback) {
    let final =0
    for (let i=0; i<array.length;i++) {
        final = callback(array[i], i)
    }
    return final

}