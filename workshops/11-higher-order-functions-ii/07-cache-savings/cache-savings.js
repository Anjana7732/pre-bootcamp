// YOUR CODE BELOW
function cacheSavings(callback) {
    debugger;
    let cache={};
    return function newf(arg) {
        debugger;
        if(cache[arg]){
            return cache[arg];
        }
        let result=callback(arg)
        cache[arg]=result
        return result
    }
}

function sayHi(name){
    return 'Hi '+name;
}

let myNewFunc = cacheSavings(sayHi);
myNewFunc('Anjana');
myNewFunc('Anjana');
