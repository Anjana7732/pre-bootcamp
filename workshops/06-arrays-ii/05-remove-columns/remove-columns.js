// YOUR CODE BELOW
function removeColumns(array, numColumns) {
    let arr =[]
    for (let i = 0; i<array.length; i++){
        
        if (Array.isArray(array[i])) {
            let r=[]
            array[i].length -= numColumns
            for (let j=0; j<array[i].length; j++){
               r.push(array[i][j])
            }
            arr.push(r)
        }
        else {
            array.length-= numColumns
            for (let k =0; k<array.length; k++) {
                arr.push(array[i])
            }
        }
    }
    return arr;
}

let originalGrid = [
      [1, 2, 3],
      [1, 2, 3]
    ];

let returnedValue = removeColumns(originalGrid, 1);
console.log(returnedValue)
    //let expectedValue = [
     // [1, 2],
      //[1, 2]
    //];