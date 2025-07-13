// YOUR CODE BELOW

let addsNums = {
  addTen: function(num) {
    return num + 10;
  },

  addTwenty: function(num) {
    return num + 20;
  },

  someProperty: 'value'
};

function callThemAll(object, value) {
    debugger;
    let res =[]
    const keys= Object.keys(object)
    for(let i=0; i<keys.length;i++) {
        let key = keys[i];
        if (typeof object[key] === 'function')
        {res.push(object[key](value))}
    }
    return res;
}



callThemAll(addsNums, 100); // => [110, 120]