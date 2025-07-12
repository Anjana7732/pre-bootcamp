// YOUR CODE BELOW
function reverseArray(array) {
    debugger
    
    let s= array.length-1
    for (let i =0; i<=Math.floor(s/2); i++) {
        let m=array[i]
        array[i] = array[s-i]
        array[s-i] = m
        
    }
    return array

}
 // [4, 3, 2, 1]