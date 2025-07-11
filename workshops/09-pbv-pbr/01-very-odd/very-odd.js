// YOUR CODE BELOW
let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8]
function veryOdd(array) {
    let arr =[]
    for (i=0; i<array.length; i++) {
        if (array[i]%2) {
            arr.push(array[i]);
        }
    }
    return arr
}
let oddNums = veryOdd(allTheNums);
console.log('oddNums:', oddNums);
console.log('allTheNums:', allTheNums );
