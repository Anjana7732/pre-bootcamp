// YOUR CODE BELOW
function callCount() {
    let count =0
    function newfunction() {
        count++
        return count
    }
    return newfunction
}
    
