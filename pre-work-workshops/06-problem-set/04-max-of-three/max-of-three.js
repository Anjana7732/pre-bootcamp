// YOUR CODE BELOW
function maxOfThree(num1,num2,num3) {
    if (num1>num2 && num2>num3){
        return num1;
    }
    else if (num3>num2 && num2>num1) {
        return num3;
    } 
    else return num2;

}
console.log(maxOfThree(4,7,13));