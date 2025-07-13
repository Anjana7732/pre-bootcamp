// YOUR CODE BELOW
function whosASpecial(array) {
    let str='';
    array.forEach(function(obj) {
        str+= obj.name+' the '+obj.species+' is very special! ';
    }
) 
        
    
    return str.trim();
}
