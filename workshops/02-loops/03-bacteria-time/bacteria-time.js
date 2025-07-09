// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum) {
    if (currentNum<targetNum) {
        let count = 0;
        for (i=currentNum; i<targetNum; i*=2) {
        count++;
        }
        result = count*20;
        return result;
    }
    else return 'targetNum must be larger than currentNum'
}
console.log(bacteriaTime(1,16));