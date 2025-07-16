// YOUR CODE BELOW
function countVowels(str) {
    if(str.length === 0){
        return 0
    }
    let numVowels=0
    if(isAVowel(str[0])) {
        numVowels+= 1
    }
    numVowels+=countVowels(str.slice(1))
    return numVowels
}
//console.log(countVowels('Four score and seven years'))

function isAVowel(char) {
    let vowels =['a', 'e', 'i', 'o','u']
    return vowels.includes(char)
}