const fibonacci = function(target) {
    if(target < 0) return "OOPS";
    if(isNaN(parseInt(target))) return "OOPS";

    //Focus on 3 elements of the sequence at once
    let currentSequence = {
        1: 1,
        2: 1,
        3: 2,
    };

    let firstKey = 1;
    let secondKey = 2;
    let thirdKey = 3;

    //While target is not in current sequence
    while(!currentSequence[target]){
        //Define new values
        let firstValue = currentSequence[secondKey];
        let secondValue = currentSequence[thirdKey];
        //Calculate the new third value by adding the new first & new second values
        let thirdValue = firstValue + secondValue;

        //Update keys
        firstKey++;
        secondKey++;
        thirdKey++;

        currentSequence = {
            [firstKey]: firstValue,
            [secondKey]: secondValue,
            [thirdKey]: thirdValue
        };
    };

    //If the target is a key in the currentSequence object, return that key's value
    return currentSequence[target];
};

// Do not edit below this line
module.exports = fibonacci;