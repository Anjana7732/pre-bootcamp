// YOUR CODE BELOW
let myArray = [10, 20, 30, 40, 50, 60];
function mySplice(array, start, del=0, value) {
    debugger;
    let rem=[];
    let nm = array;
    let s = array.length
    for (let i =0; i<s; i++) {
        if (i === start) {
            if (del>0){
                if (value=== undefined) {
                for (let n = start; n<start+del; n++)
                {
                rem.push(array[n])
                }
                array[i] =array[i+del]
                array.length =s-del

                }
                else {
                for (let j = start; j<start+del; j++)
                {
                rem.push(array[i])
                array[j]= value
                }
        }
            }
            else {
                if (value !== undefined) {
                    array.length=s+1
                    for (let k=array.length-1; k>start; k--){
                    
                        array[k] = array[k-1]
                    }

                    array[start] = value
                }
            }
        


        }
        
    }
    
    return rem;
    

}
 // => [2]
console.log(mySplice(myArray, 2, 0,89))

console.log(myArray)    // [1,'apples', 3]

