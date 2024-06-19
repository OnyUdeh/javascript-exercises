const removeFromArray = function (array, ...otherArgs) {
    const newArray = [];
    array.forEach((item) => {
      if (!otherArgs.includes(item)) {
        newArray.push(item)
      }
    });
    return newArray;
  };

// Do not edit below this line
module.exports = removeFromArray;


// Implement a function that takes an array and some other arguments then removes the other arguments from that array: