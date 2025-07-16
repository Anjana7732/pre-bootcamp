// YOUR CODE BELOW
function isPalindrome(str) {
    str = str.toLowerCase()
    if (str.length === 1) {
        return true
    }
    if (str.length === 2) {
        return str[0]===str[1]
    }
    let first = str[0]
    let last = str.slice(-1)
    if (first !== last) {
         return false}
    let remain = isPalindrome(str.slice(1,-1))
    return remain
}