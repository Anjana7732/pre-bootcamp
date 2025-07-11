// YOUR CODE BELOW
function myIncludes(array, searchValue) {
    let count = 0;
    for (let i = 0; i<array.length; i++) {
        if (array[i] === searchValue) {
            count ++;
        }
    }
    if (count === 0){
        return  false;
    }
    else return true;
}
console.log(myIncludes(['apples', 'bananas', 'citrus'], 'pears'))
