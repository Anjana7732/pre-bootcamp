// YOUR CODE BELOW
function makeGrid(numColumns, numRows) {
    arr =[]
    for (let i =0; i<numRows; i++) {
        let c=1;
        let y=[]
        for (let j=0; j<numColumns; j++){
            y.push(c);
            c++;
        }
        arr.push(y)
    }
    return arr
}

