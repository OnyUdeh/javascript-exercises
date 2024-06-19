const sumAll = function(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++){
        sum += i;
    }
        return(sum)
};

// Do not edit below this line
module.exports = sumAll;


// Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:

// ```javascript
// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10