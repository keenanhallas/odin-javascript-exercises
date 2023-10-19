const removeFromArray = function(arr, ...rest) {
    let newArr = arr;
    for(i = 0; i < rest.length; i++){
        let itemIndex = newArr.indexOf(rest[i]);
        if (itemIndex === -1){
            continue;
        }
        let arrCopy = newArr.slice();
        arrCopy.splice(itemIndex, 1);
        newArr = arrCopy;
    }
    
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
