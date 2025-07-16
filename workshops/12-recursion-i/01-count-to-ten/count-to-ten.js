// YOUR CODE BELOW
let n=0
function countToTen(num) {
    if (num === 10) {
        console.log(num)
    }
    else {
        console.log(num)
        countToTen(num+1)
    }
}
//countToTen(5);