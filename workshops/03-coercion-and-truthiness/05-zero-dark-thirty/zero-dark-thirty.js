// YOUR CODE BELOW
function zeroDarkThirty(num) {
    debugger;
    if (!num) {
        return NaN;
    }
    numstring= String(num)
    let rest = '';
    
    for (i= 0; i<numstring.length; i++) {
        cd = numstring[i]
        if (Number(cd) || cd ==='.') {
            rest+= numstring[i]
        }
        
    }
    final = Number(rest);
    return final;
}
console.log(zeroDarkThirty(606.203))