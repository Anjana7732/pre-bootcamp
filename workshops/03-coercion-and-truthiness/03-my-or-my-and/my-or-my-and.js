// YOUR CODE BELOW
function myOr(arg1, arg2, arg3) {
    if (arg1) {
        return arg1;
    }
    else if (arg2) {
        return arg2;
    }
    else return arg3;
}
console.log(myOr('', 0, null));
function myAnd(a,b,c) {
    if (!a) {
        return a;
    }
    else if (!b) {
        return b;
    }
    else  return c;
} 
console.log(myAnd(0, 1, false))