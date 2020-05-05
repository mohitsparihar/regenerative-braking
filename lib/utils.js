import log from './logger.js'

const Util  = {
    createRangeArray: function(initialValue, increment, howMany) {
        let arr = [initialValue];
        let currentValue = initialValue;
        for(let i = 2; i <=howMany; i++) {
            currentValue += increment;
            arr.push(currentValue);
        }
        log(arr);
        return arr;
    }
}

export default Util