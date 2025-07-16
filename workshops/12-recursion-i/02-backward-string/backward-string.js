// YOUR CODE BELOW
function backwardString(string) {
    
    if (string.length === 1) {
        console.log(string)
    }
    else {
        console.log(string[string.length-1])
        string=string.slice(0,-1)
        backwardString(string)
    }
}
backwardString('happy');