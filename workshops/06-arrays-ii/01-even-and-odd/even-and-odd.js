// YOUR CODE BELOW
function evenAndOdd(array) {
    let arr =[];
    let odd =[];
    let even =[];
    for (let i=0; i<array.length; i++) {
        if (array[i]%2) {
            odd.push(array[i])
        }
        else even.push(array[i])
    }
    arr.push(even, odd);
    
    return arr
}
console.log(evenAndOdd([1, 2, 3, 4, 5, 6]))
