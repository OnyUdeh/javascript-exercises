const repeatString = function(word, num) {
    let string=""
    if(num < 0){
        return("ERROR")
    } else {
        for(let i = 0; i < num; i++){
            string+=word;
        }
        return(string);
    }
};

// Do not edit below this line
module.exports = repeatString;


// 1) Create a function that repeats the string a given number of times
// 2) This function will take two arguments, `string` and `num`
// 3) returns ERROR with negative numbers