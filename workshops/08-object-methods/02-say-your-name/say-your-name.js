// YOUR CODE BELOW
me2={name:'Tarana', getGreeting: function(friend) {
    return 'Hi '+ friend.name+', my name is '+this.name+'.'
}

}
let you={name: 'Alyssa'}
console.log(me2.name); // 'Tarana'
console.log(you.name); // 'Alyssa'
console.log(me2.getGreeting(you)); 