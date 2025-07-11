// YOUR CODE BELOW
function myUnshift(array, value) {
    let unsh=[value]

    for (let i = 0; i<array.length; i++) {
        unsh.push(array[i])
    }
    return unsh
}
console.log(myUnshift([1, 2, 3], 5))