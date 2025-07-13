// YOUR CODE BELOW
function getDogBreeder(defaultname, defaultage) {
    return dogBreeder;
    function dogBreeder(name,age) {
        if (age === undefined) {
            if (typeof name === 'number') {
                age =name
                name =undefined
            }
            else {
            age =defaultage
        }
        }
        if (!name) {
            name =defaultname;
        }
        let ob={
            name: name,
            age: age
        }
        return ob

    }

    
}