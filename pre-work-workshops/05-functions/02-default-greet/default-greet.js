// YOUR CODE BELOW
function defaultGreet(name1, name2) {
    if (name2 === undefined) {
        name2 = 'Doe';
    }
    
    result ='Hi' +' '+ name1 +' '+ name2 + '!';
    return result;

}
final = defaultGreet('John');
console.log(final);