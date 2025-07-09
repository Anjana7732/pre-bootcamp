// YOUR CODE BELOW
function exponentiate(base, power) {
    
    let result = 1;
    for(let i = power; i>0;i--) {
        result*=base;
    }
    return result;
}
console.log(exponentiate(5, 0)); // 8