// YOUR CODE BELOW
function mySlice(originalString, startIdx, endIdx) {

    if (startIdx === undefined) {
        startIdx = 0;
    }
    if (endIdx === undefined) {
        endIdx = originalString.length;
    }
    let result ="";
    for (let i = startIdx; i<endIdx; i++) {
        result += originalString[i];
    }
    return result;
}
console.log(mySlice("hello world")); // "hello"