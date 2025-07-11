// YOUR CODE BELOW
function zooInventory(array) {
    arr =[]
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            let n = [];
            for (let j = 0; j < array[i].length; j++) {
                if (!Array.isArray(array[i][j])) {
                    n = array[i][j] + ' the ' + array[i][j + 1][0] + ' is ' + array[i][j + 1][1];
                }
            }
            arr.push(n);
        }
    }

    return arr;
}


let myZoo = [
  ['King Kong', ['gorilla', 42]],
  ['Nemo', ['fish', 5]],
  ['Punxsutawney Phil', ['groundhog', 11]]
];
console.log(zooInventory(myZoo))
