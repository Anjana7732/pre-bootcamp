// YOUR CODE BELOW
function rotateArray(array, num) {
    debugger
    let rot =[]
    if (num>=0) {
        for (j=1; j<=num; j++){
            rot.push(array[array.length-j])}
            for (let i=0; i<array.length-num;i++) {
            rot.push(array[i])
        
        }
    }

    
    else {
        for (let k=array.length+num; k>0;k--) {
        rot.push(array[array.length-k])
        }
        for (let k=0; k<Math.abs(num); k++) {
        rot.push(array[k])
        }
    }
    return rot
}
console.log(rotateArray([1, 2, 3, 4, 5],-2 ))