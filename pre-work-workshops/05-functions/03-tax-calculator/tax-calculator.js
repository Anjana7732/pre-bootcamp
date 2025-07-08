// YOUR CODE BELOW
function taxCalculator(price, state) {
    if (state === 'NY') {
        tax = 0.04;
    }
    if (state === 'NJ') {
        tax = 0.06625;
    }
    aftertax = price + price * tax;
    return aftertax;
}
final = taxCalculator(100, 'NJ');
console.log('The after-tax cost is: ' +final);
