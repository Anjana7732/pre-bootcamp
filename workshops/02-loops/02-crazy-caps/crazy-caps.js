// YOUR CODE BELOW
function crazyCaps(astring) {
    let count = astring.length-1;
    let cap = "";
    for (i=0; i<=count; i++) {
        if (i%2) {
            cap+= astring[i].toUpperCase();
        }
        else {
            cap+= astring[i].toLowerCase();
        }
    }
    return cap;
}
console.log(crazyCaps("tej is amazing"));
