// YOUR CODE BELOW
function myMnemonic(word1, word2, word3, word4) {
    if(word1==='') {
        return '';
    }else if (word3 === undefined) {
      
         result = word1[0] +word2[0];
    }
    else if (word4 === undefined){
        result = word1[0]+word2[0]+word3[0];
    }
    
    else {
        result =  word1[0]+word2[0]+word3[0]+word4[0];
    }
    
    console.log(typeof result);
    return result;
}
//let mnemonic = myMnemonic('Must','Accept','Sugar','Happiness');
//console.log(mnemonic)
//console.log(mnemonic);
//mnemonic = myMnemonic('We', 'Eat', 'Eggs');
//console.log(mnemonic);
mnemonic= myMnemonic('Cat', 'Fish');
console.log(mnemonic);
