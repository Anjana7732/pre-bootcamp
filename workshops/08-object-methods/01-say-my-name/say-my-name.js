// YOUR CODE BELOW
me ={name: 'Kat', getGreeting: function() {
    return 'Hi, my name is '+this.name +'.'
    }
 }

console.log(me.name); // 'Kat'
console.log(me.getGreeting()); // => 'Hi, my name is Kat.'