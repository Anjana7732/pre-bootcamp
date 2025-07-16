// YOUR CODE BELOW
function reverseArray(array){
    if (array.length === 1){
        return array.slice()
    }
    let newArray=[]
    let last = array[array.length -1]
    newArray.push(last)
    let remaining= reverseArray(array.slice(0,-1))
    newArray = newArray.concat(remaining)
    return newArray
}