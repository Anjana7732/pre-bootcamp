// YOUR CODE BELOW
function oddCouple(array) {
    let b= [];
    let count = 0;
    for ( let i= 0; i<array.length; i++) {

        if (count<2) {
            if (array[i]%2 !== 0) {
                b.push(array[i])
                count++;
            }
        }
    }
    if (count === 0) {
        return [];
    }
    else return b;
}
console.log(oddCouple(2, 4, 6, 8));