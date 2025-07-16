// YOUR CODE BELOW
function sumNums(num) {
    if (num === 1){
        return 1
    }
    let res =num+sumNums(num-1)
    return res
}
console.log(sumNums(3));