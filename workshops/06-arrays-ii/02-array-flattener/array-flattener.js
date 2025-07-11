// YOUR CODE BELOW
function arrayFlattener(array) {
    let arr =[]
    for (i = 0; i<array.length; i++) {
        if (Array.isArray(array[i])) {
            for (let j =0; j<array[i].length; j++) {
                arr.push(array[i][j])
            }
        }
        else 
        {
            arr.push(array[i])
        }
    }
    return arr;

}
console.log(arrayFlattener(['I', 'am', 'working', ['on', 'another', 'level']]))