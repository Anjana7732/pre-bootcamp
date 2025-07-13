// YOUR CODE BELOW
function deeperCopy(array) {
    let copy=[]
    for (let i=0; i<array.length;i++) {
        if (Array.isArray(array[i])) {
            nestedcopy=[]
            for(let j=0; j<array[i].length;j++) {
                nestedcopy.push(array[i][j])
            }
            copy.push(nestedcopy)
        }
        else {
            copy.push(array)
        }
    }
    return copy
}