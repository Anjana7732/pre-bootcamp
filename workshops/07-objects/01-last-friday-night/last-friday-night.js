// YOUR CODE BELOW
function lastFridayNight(object) {
    let total=0
    for (let i=0; i<object.length;i++) {
        let trans =object[i]
        total+= trans.amount
    }
    return total
}

