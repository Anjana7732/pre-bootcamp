// YOUR CODE BELOW
function onlyOdds(num) {
    let sum = 0;
    if (num>1) {
        for (let i = num; i>=1;i--) {
            if (i%2 !== 0) {
                sum += i;
            }
        }
        return sum;
    }
    else return 0;
}
console.log(onlyOdds(6));