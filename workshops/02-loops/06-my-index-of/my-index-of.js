// YOUR CODE BELOW
function myIndexOf(source, searchValue, startIdx) {
    debugger;
    if (startIdx === undefined ) {
        startIdx = 0;
    }
    for (let i = startIdx; i<source.length; i++) {
        let check = source.slice(i, i+searchValue.length);
        if (check === searchValue) {
            return i;
        }
    
    }
    return -1; 
}
console.log(myIndexOf('twice twice', 'ice', 5));