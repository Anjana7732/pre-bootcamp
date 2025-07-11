// YOUR CODE BELOW
function myLastIndexOf(array, searchValue, startIdx) {
    let count = 0;
    if (startIdx === undefined ) {
        startIdx = array.length-1;
    }
    
    for (let i = startIdx; i>=0; i--) {
        if (array[i]=== searchValue) {
            count ++;
            if (count === 1) {
                lastvalue = i;
            }
        }
       
    }
    if (count>0) {
        return lastvalue;
    }
    else return -1;
}
console.log(myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2))