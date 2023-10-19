const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0){
        return "ERROR";
    }
    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    let sum = 0;
    let big = num1 > num2 ? num1 : num2;
    let small = num2 < num1 ? num2 : num1;
    for (i = small; i <= big; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
