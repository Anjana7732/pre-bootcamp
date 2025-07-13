// YOUR CODE BELOW
function dogBreeder(name, age=0) {
    let obj={}
    if (typeof name === 'number') {
        age =name
        name = ''
    }
    if (!name) {
        name ='Steve'
    }
    
    obj.name = name
    obj.age = age
    return obj
}
console.log(dogBreeder('sam',12))