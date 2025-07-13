// YOUR CODE BELOW
function partial(callback, a) {
    function another(b) {
        return callback(a,b)
    }
    return another;
}