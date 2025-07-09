// YOUR CODE BELOW
function isTruthy(value) {
    if (value) {
        return true
    }
    if (value === null) {
        return 'The null value is falsey'
    }
    if (value === false) {
        return 'The boolean value false is falsey'
    }
    if (value === undefined) {
        return 'undefined is falsey'
    }
    if (value === '') {
        return 'The empty string is falsey (the only falsey string)'
    }
    if (value === 0) {
        return 'The number 0 is falsey (the only falsey number)'
    }
}
console.log(isTruthy(false));