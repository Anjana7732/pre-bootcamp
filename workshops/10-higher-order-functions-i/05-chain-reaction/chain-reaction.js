// YOUR CODE BELOW
function chainReaction(start, array) {
    let result =start;
    for(let i=0; i<array.length; i++) {
        let corres = array[i];
        result = corres(result)
    }
    return result;
}