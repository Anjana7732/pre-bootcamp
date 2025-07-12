function mySlice(originalArray, startIdx=0, endIdx) {
    debugger
    arr=[]
    if (endIdx === undefined) {
        endIdx= originalArray.length}
    if (startIdx>=0) {
        for (let i=0; i<originalArray.length;i++ ) {
        if (i=== startIdx) {
            for (j=i; j<endIdx; j++) {
                arr.push(originalArray[j])
            }
        }
        }
    }
    else {
            
        startIdx = originalArray.length + startIdx;
      
    
    if (endIdx < 0) {
        endIdx = originalArray.length + endIdx;
    }

    
    startIdx = Math.max(0, startIdx);
    endIdx = Math.min(originalArray.length, endIdx);

    for (let i = startIdx; i < endIdx; i++) {
        arr.push(originalArray[i]);
    }
    
    

    }
    return arr

}
console.log(mySlice([1, 2, 3, 4], -2,-1))