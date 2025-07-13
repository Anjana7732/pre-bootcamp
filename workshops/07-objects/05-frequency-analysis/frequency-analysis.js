// YOUR CODE BELOW
function frequencyAnalysis(string) {
    debugger
    let obj ={}
    for (let i=0; i<string.length; i++) {
        let count =0;
        if (obj[string[i]]) {
            continue;
        }
        for (let j=i+1; j<string.length; j++) {
            if (string[i]===string[j]) {
                count++
            }
        }
        if (count>0) {
            obj[string[i]]=count+1;
        }
        else {
            obj[string[i]]=1
        }
    }
    return obj
}
console.log(frequencyAnalysis('abca'))