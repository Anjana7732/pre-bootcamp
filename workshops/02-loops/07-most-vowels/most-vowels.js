// YOUR CODE BELOW
function mostVowels(string) {
    let maxvowels =0;
    for (i=0; i<string.length; i++) {
        if (string !== ' ') {
        let count = 0;
        let word ='';
        
        for (j=i; j<string.length; j++) {
            if (string[j] === 'a' || string[j] === 'e' || string[j] === 'i' || string[j] === 'o' || string[j] === 'u' || string[j] === 'A' || string[j] === 'E' || string[j] === 'O' || string[j] === 'I' || string[j] === 'U') {
                count++;
                word += string[j];
            }
            if (count>maxvowels) {
                maxword = word;
                maxvowels= count;
            }
            
        }
    }
    }
    return maxword;
}
console.log(mostVowels('I am a keeper with some real rhythms'))