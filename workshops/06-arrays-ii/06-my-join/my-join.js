// YOUR CODE BELOW
function myJoin(array, separator) {

    let res=''
    if (array[0]=== undefined|| array[0] ===null)
    {
        res+=''
    }
    else {res+= array[0]}
    
    for (let i=0; i<array.length-1; i++) {
        
        if (array[i+1] === undefined || array[i+1]===null) {
            if (separator !== undefined ) {
            res+= separator+''
            }
            else {
            res+= ','+''
            }
            
            
        }
        else {
            if (separator !== undefined) {
            res+= separator+ array[i+1]
            }
            else {
            res+= ','+array[i+1]
            }
        }
    }
    return res
}
//console.log(myJoin(['null','hello', undefined, 'world'], '-'));
