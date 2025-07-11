// YOUR CODE BELOW

// let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8]
function veryOddMutant(array) {
    
    let count = 0;
    for (i = 0; i<array.length; i++) {
         let curr = array[i];
        if (!(curr%2)) {
            array[i] = 'normie';
            count++;
        }
    }
    console.log('allTheNums: ', allTheNums);
    return count;
}
// let countRemoved = veryOddMutant(allTheNums);
// console.log('countRemoved:', countRemoved);