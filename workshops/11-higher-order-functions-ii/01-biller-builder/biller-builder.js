// YOUR CODE BELOW
function billerBuilder(state) {
    if (state === 'NY') {
        
        function biller(price) {
            res = price* 1.03*1.04
            return res
        }
        return biller;
    }
    if (state === 'NJ') {
        function sbiller(price) {
            ros =price* 1.05*1.06625
            return ros
        }
        return sbiller;

        
    }
    
    
}