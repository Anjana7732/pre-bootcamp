// YOUR CODE BELOW
function cloneMachine(animal) {
    let clone ={
        name: animal.name +'Clone',
        species: animal.species,
        offspring: []
    };

    animal.offspring.push(clone.name);
    return clone;
    
}